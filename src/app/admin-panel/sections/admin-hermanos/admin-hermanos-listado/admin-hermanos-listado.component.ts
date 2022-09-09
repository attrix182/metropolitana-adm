import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dias, Disponibilidad, Hermano, Horarios } from 'src/app/models/hermano.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AdminGrillaService } from '../../admin-grilla/admin-grilla.service';

@Component({
  selector: 'met-admin-hermanos-listado',
  templateUrl: './admin-hermanos-listado.component.html',
  styleUrls: ['./admin-hermanos-listado.component.scss']
})
export class AdminHermanosListadoComponent implements OnInit {
  @Input() hermanos: Hermano[];
  @Input() hermanosSearch: any;
  @Input() vista: 'grilla' | 'hermanos';
  @Output() goToEdit = new EventEmitter<Hermano>();
  searchParam: string;
  disponibilidadShow: Disponibilidad[];
  hermanoSeleccionado: string;
  hermanosSeleccionados: Hermano[] = [];
  hermanosDisponiblesDias: Hermano[] = [];
  hermanosDisponibles: Hermano[] = [];

  @ViewChild('disponibilidadModal', { read: TemplateRef })
  disponibilidadModal: TemplateRef<any>;
  disponibilidad: any;

  constructor(
    private storageSVC: StorageService,
    private alertSvc: AlertService,
    private modalService: NgbModal,
    private grillaSVC: AdminGrillaService
  ) {}

  ngOnInit(): void {
    if (this.vista == 'grilla') {
      this.storageSVC.GetAll('hermanos').subscribe((data) => {
        this.hermanos = data;
      });
      this.getDisponibilidad();
    }
  }

  getDisponibilidad() {
    this.grillaSVC.getActualizarHorario$().subscribe(() => {
      this.grillaSVC.getHorario$().subscribe((data) => {
        this.disponibilidad = data;
        this.filtrarPorDia(this.disponibilidad);
      });
    });
  }

  filtrarPorDia(turnoSeleccionado) {
    let date = new Date(
      `${turnoSeleccionado.dia.month}` + '/' + `${turnoSeleccionado.dia.day}` + '/' + ` ${turnoSeleccionado.dia.year}`
    );
    let indexDia = (date.getDay() - 1).toString();
    if (indexDia == '-1') {
      indexDia = '6';
    }

    this.hermanosDisponiblesDias = [];

    this.hermanos.forEach((h) => {
      h.disponibilidad.forEach((d) => {
        if (d.dia === parseInt(indexDia)) {
          this.hermanosDisponiblesDias.push(h);
        }
      });
    });
    this.filtrarPorHorario(turnoSeleccionado);

  }

  filtrarPorHorario(turnoSeleccionado: any) {
    this.hermanosDisponibles = [];

    this.hermanosDisponiblesDias.forEach((h) => {
      h.disponibilidad.forEach((d) => {
        d.horario.forEach((ho) => {
          if ((ho + 1).toString() == Horarios[turnoSeleccionado.horario.turno].toString()) {
            if (this.hermanosDisponibles.indexOf(h) === -1) {
              this.hermanosDisponibles.push(h);
            }
          }
        });
      });
    });

    if(this.hermanosDisponibles.length == 0) {
      this.alertSvc.alertCenter('info', 'No hay hermanos disponibles para ese turno')
    }
  }

  seleccionar(item) {
    let cardHtml = document.getElementById(item.id) as HTMLElement;
    cardHtml.classList.toggle('card-selected');

    let index = this.hermanos.findIndex((h) => h.id == item.id);

    if (index == -1) {
      this.hermanosSeleccionados.push(item);
    } else {
      this.hermanosSeleccionados.splice(index, 1);
    }

    this.grillaSVC.setHermanos(item);
  }

  async delete(product: any) {
    let confirm: any = false;
    confirm = await this.alertSvc.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('hermanos', product.id).then(() => {
        this.alertSvc.alertCenter('info', 'El hermano ha sido eliminado');
      });
    }
  }

  goToEditHermano(hermano: Hermano) {
    this.goToEdit.emit(hermano);
  }

  showDisponibilidad(uno: Hermano) {
    this.disponibilidadShow = uno.disponibilidad;
    this.hermanoSeleccionado = uno.nombre + ' ' + uno.apellido;
    this.modalService.open(this.disponibilidadModal);
  }

  hacerBusqueda() {
    if (this.searchParam === '') {
      this.hermanos = this.hermanosSearch;
      return;
    }
    const serachParamLower = this.searchParam.toLowerCase();
    this.hermanos = this.hermanosSearch.filter((item) => this.doSearch(item, serachParamLower));
  }

  doSearch(value, searcher) {
    if (typeof value === 'boolean') {
      return false;
    }

    if (typeof value === 'object') {
      for (let fieldKey in value) {
        if (this.doSearch(value[fieldKey], searcher)) {
          return true;
        }
      }
      return false;
    }

    return (typeof value == 'string' ? value.toLocaleLowerCase() : value.toString()).includes(searcher);
  }
}
