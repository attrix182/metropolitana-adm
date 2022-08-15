import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})
export class PublicHomeComponent implements OnInit {
  tipoSeleccionado: any;
  solicitud: any;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.getSolicitud();
  }

  getSolicitud() {
    this.solicitud = JSON.parse(localStorage.getItem('solicitud'));
    this.validarSolicitud();
 
  }

  validarSolicitud() {
    if (this.solicitud) {
      this.router.navigate(['/solicitar-territorio/' + this.solicitud.tipo]);
    }
  }

  gotoSolicitarTerritorioFijos() {
    this.tipoSeleccionado = 'fijos';
    this.router.navigate([`solicitar-territorio/${this.tipoSeleccionado}`]);
  }

  gotoSolicitarTerritorioCelulares() {
    this.tipoSeleccionado = 'celulares';
    this.router.navigate([`solicitar-territorio/${this.tipoSeleccionado}`]);
  }
}
