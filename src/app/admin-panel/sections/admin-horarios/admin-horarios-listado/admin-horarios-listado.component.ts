import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Horarios } from 'src/app/models/hermano.model';
import { Horario } from 'src/app/models/horario.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AdminGrillaService } from '../../admin-grilla/admin-grilla.service';

@Component({
  selector: 'met-admin-horarios-listado',
  templateUrl: './admin-horarios-listado.component.html',
  styleUrls: ['./admin-horarios-listado.component.scss']
})
export class AdminHorariosListadoComponent implements OnInit {
  @Input() horarios: Horario[];
  @Input() vista: 'grilla' | 'horarios';
  @Output() setHorario = new EventEmitter<Horario>();
  horarioSeleccionado:Horario;
  filtroSeteado: boolean;


  constructor(private storageSVC: StorageService, private alertSVC: AlertService, private grillaSVC:AdminGrillaService) { }


  ngOnInit(): void {
    if (this.vista == 'grilla') {
      this.storageSVC.GetAll('horarios').subscribe((data) => {
        this.horarios = data;
      });
  }
}

seleccionar(item) {
  this.removeSelected();
  this.horarioSeleccionado = item;
  let cardHtml = document.getElementById(item.id) as HTMLElement;
  cardHtml.classList.toggle('card-selected');

  this.grillaSVC.setHorario(this.horarioSeleccionado);
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
