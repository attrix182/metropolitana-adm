import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Punto } from 'src/app/models/puntos.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-puntos-listado',
  templateUrl: './admin-puntos-listado.component.html',
  styleUrls: ['./admin-puntos-listado.component.scss']
})
export class AdminPuntosListadoComponent implements OnInit {
  @Input() puntos: Punto[];
  @Output() setPunto = new EventEmitter<Punto>();
  filtroSeteado: boolean;


  constructor(private storageSVC: StorageService, private alertSVC: AlertService) { }

  ngOnInit(): void {
    this.setFilterActivos();
  }

  update(punto: Punto) {
    this.setPunto.emit(punto);
  }

  async delete(punto: Punto) {
    let id = punto.id.toString();

    let confirm: any = false;
    confirm = await this.alertSVC.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('puntos', id).then(() => {
        this.alertSVC.alertCenter('info', 'El punto ha sido eliminado');
      });
    }
  }

  setFilterActivos() {
    this.filtroSeteado = true;
    let btnActivos = document.querySelector('#activos');
    this.removerSeleccionados();
    btnActivos.classList.add('selected');
  }

  setFilterInactivos() {
    this.filtroSeteado = false;
    let btnInactivos = document.querySelector('#inactivos');
    this.removerSeleccionados();
    btnInactivos.classList.add('selected');
  }

  removerSeleccionados() {
    let btnActivos = document.querySelector('#activos');
    let btnInactivos = document.querySelector('#inactivos');
    btnActivos.classList.remove('selected');
    btnInactivos.classList.remove('selected');
  }
}
