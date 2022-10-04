import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#32CD32',
    secondary: '#baf7ba'
  }
};

@Component({
  selector: 'met-admin-grilla-calendario',
  templateUrl: './admin-grilla-calendario.component.html',
  styleUrls: ['./admin-grilla-calendario.component.scss']
})
export class AdminGrillaCalendarioComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  turnos: any[];
  turnoFormateado: any;
  loaded: boolean = false;
  refresh = new Subject<void>();

  formInforme: FormGroup;
  showForm: boolean = false;
  loading:boolean = false;
  informeCargado:any = null;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  locale: string = 'es';
  startOn = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  constructor(
    private modal: NgbModal,
    private storageSVC: StorageService,
    private alertSvc: AlertService,
    private fb: FormBuilder
  ) {}

  initForm() {

    this.formInforme = this.fb.group({
      publicaciones: ['', [Validators.required]],
      videos: ['', [Validators.required]],
    });
  }

  editInforme(){
    this.showForm = true;
  }

  getInformeById(){
   this.storageSVC.GetByParameter('informes','id',this.turnoFormateado.id).subscribe( (informe) =>{
     informe ? this.informeCargado = informe[0] : this.informeCargado = false;
     console.log(this.informeCargado)
   })
  }

  saveInforme(){
    this.loading = true;
    let informe = this.formInforme.value
    informe.turno = this.turnoFormateado
    informe.id = this.turnoFormateado.id
    this.storageSVC.InsertCustomID('informes', informe.id, informe).then( ()=>{
      this.loading = false;
      this.alertSvc.alertCenter('success', '¡Informe guardado!')
    } )
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    let id = this.modalData.event.id;
    this.getById(id);
    this.modal.open(this.modalContent, { size: 'lg' });
    this.getInformeById()
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
    this.getTurnos();
    this.initForm();
  }

  getTurnos() {
    this.storageSVC.GetAll('turnos').subscribe((turnos) => {
      this.turnos = turnos;
      this.formatHorarios();
    });
  }

  formatHorarios() {
    console.log(this.turnos);
    this.turnos.forEach((turno) => {
      let horarioInicio = new Date(
        `${turno.horario.dia.month}/${turno.horario.dia.day}/${turno.horario.dia.year} ${turno.horario.horario.horarioInicio}:00`
      );
      let horarioFin = new Date(
        `${turno.horario.dia.month}/${turno.horario.dia.day}/${turno.horario.dia.year} ${turno.horario.horario.horarioFin}:00`
      );

      let hoy = new Date();
      let diaTurno = new Date(
        `${turno.horario.dia.month}/${turno.horario.dia.day}/${turno.horario.dia.year} ${turno.horario.horario.horarioInicio}:00`
      );
      if (diaTurno < hoy) {
        this.turnos.find((t) => t == turno).past = true;
        this.addEvent(turno, horarioInicio, horarioFin, colors.green);
      } else {
        this.addEvent(turno, horarioInicio, horarioFin, colors.red);
      }
    });
    this.loaded = true;
  }

  addEvent(turno, horarioInicio, horarioFin, color): void {
    this.events = [
      ...this.events,
      {
        title: turno.punto.nombre,
        id: turno.id,
        start: horarioInicio,
        end: horarioFin,
        color: color,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
    console.log(this.events);
  }

  getById(id) {
    this.turnoFormateado = this.turnos.find((x) => x.id === id);
    console.log(this.turnoFormateado);
  }

  async delete(id) {
    let confirm: any = false;
    confirm = await this.alertSvc.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('turnos', id).then(() => {
        this.refresh.next();
        this.alertSvc.alertCenter('info', 'El Turno ha sido eliminado');
        this.modal.dismissAll();
      });
    }
  }
}
