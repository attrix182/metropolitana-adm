import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Punto } from 'src/app/models/puntos.model';
import { Turno } from 'src/app/models/turno.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AdminGrillaService } from '../../admin-grilla/admin-grilla.service';

@Component({
  selector: 'met-admin-puntos-listado',
  templateUrl: './admin-puntos-listado.component.html',
  styleUrls: ['./admin-puntos-listado.component.scss']
})
export class AdminPuntosListadoComponent implements OnInit {
  @Input() puntos: Punto[];
  @Input() vista: 'grilla' | 'puntos';
  @Output() setPunto = new EventEmitter<Punto>();
  filtroSeteado: boolean;
  puntoSeleccionado: Punto;
  turno: Turno;

  constructor(
    private storageSVC: StorageService,
    private alertSVC: AlertService,
    private grillaSVC: AdminGrillaService
  ) {}

  ngOnInit(): void {
    if (this.vista == 'grilla') {
      this.filtroSeteado = true;
      this.storageSVC.GetAll('puntos').subscribe((data) => {
        this.puntos = data;
      });
    }
  }
  ngAfterViewInit() {
    if (this.vista == 'grilla') return;
    this.setFilterActivos();
  }

  seleccionarPunto(punto) {
    this.removeSelected();
    this.puntoSeleccionado = punto;
    let puntoHtml = document.getElementById(punto.id) as HTMLElement;
    puntoHtml.classList.toggle('card-selected');

    this.grillaSVC.setPunto(this.puntoSeleccionado);
  }

  removeSelected() {
    if (this.puntoSeleccionado) {
      let puntoHtml = document.getElementById(this.puntoSeleccionado.id) as HTMLElement;
      puntoHtml.classList.toggle('card-selected');
      this.puntoSeleccionado = null;
    }
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
