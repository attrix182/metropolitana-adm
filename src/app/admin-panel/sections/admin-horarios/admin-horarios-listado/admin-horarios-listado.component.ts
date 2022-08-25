import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Horario } from 'src/app/models/horarios.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-horarios-listado',
  templateUrl: './admin-horarios-listado.component.html',
  styleUrls: ['./admin-horarios-listado.component.scss']
})
export class AdminHorariosListadoComponent implements OnInit {
  @Input() horarios: Horario[];
  @Output() setHorario = new EventEmitter<Horario>();
  filtroSeteado: boolean;


  constructor(private storageSVC: StorageService, private alertSVC: AlertService) { }


  ngOnInit(): void {
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
