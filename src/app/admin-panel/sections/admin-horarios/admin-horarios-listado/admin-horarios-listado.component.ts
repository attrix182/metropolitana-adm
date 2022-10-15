import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Dias, Horarios } from 'src/app/models/hermano.model';
import { Horario } from 'src/app/models/horario.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AdminGrillaService } from '../../admin-grilla/admin-grilla.service';
import { NgbDateStruct, NgbCalendar, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  es: {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekLabel: 'Sem'
  }
};
@Injectable()
export class I18n {
  language = 'es';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayLabel(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getWeekLabel(): string {
    return I18N_VALUES[this._i18n.language].weekLabel;
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'met-admin-horarios-listado',
  templateUrl: './admin-horarios-listado.component.html',
  styleUrls: ['./admin-horarios-listado.component.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
})
export class AdminHorariosListadoComponent implements OnInit {
  @Input() horarios: Horario[];
  @Input() vista: 'grilla' | 'horarios';
  @Output() setHorario = new EventEmitter<Horario>();
  horarioSeleccionado: Horario;
  diaSeleccionado: Dias;
  filtroSeteado: boolean;
  dias: string[] = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'];
  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(
    private storageSVC: StorageService,
    private alertSVC: AlertService,
    private grillaSVC: AdminGrillaService,
  ) {}

  
  ngOnInit(): void {
    if (this.vista == 'grilla') {
      this.storageSVC.GetAll('horarios').subscribe((data) => {
        this.sortHorarios(data)
        this.horarios = data;
      });
    }
  }

  sortHorarios(data: Horario[]) {
    data.sort((ha, hb) => {
      if (ha.horarioInicio > hb.horarioInicio) {
        return 1;
      }
      if (ha.horarioInicio < hb.horarioInicio) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  onDateChange(newValue) {
    this.removeSelected();
}



  seleccionar(item) {
    this.removeSelected();
    this.horarioSeleccionado = item;
    let cardHtml = document.getElementById(item.id) as HTMLElement;
    cardHtml.classList.toggle('card-selected');
 
    let dia = { year: this.date.year, month: this.date.month, day: this.model.day };
    this.grillaSVC.setHorario({ dia: dia, horario: this.horarioSeleccionado });
  }

  removeSelected() {
    if (this.horarioSeleccionado) {
      let cardHtml = document.getElementById(this.horarioSeleccionado.id) as HTMLElement;
      cardHtml.classList.toggle('card-selected');
      this.horarioSeleccionado = null;
    }
  }

  updateHorario(horario: Horario) {
    this.setHorario.emit(horario);
  }

  async delete(horario: Horario) {
    let id = horario.id.toString();

    let confirm: any = false;
    confirm = await this.alertSVC.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('horarios', id).then(() => {
        this.alertSVC.alertCenter('info', 'El horario ha sido eliminado');
      });
    }
  }

  removerSeleccionados() {
    let btnActivos = document.querySelector('#activos');
    let btnInactivos = document.querySelector('#inactivos');
    btnActivos.classList.remove('selected');
    btnInactivos.classList.remove('selected');
  }
}
