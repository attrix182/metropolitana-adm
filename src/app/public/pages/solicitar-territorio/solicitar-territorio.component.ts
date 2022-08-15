import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Location } from '@angular/common';

export interface Territorio {
  id: string;
  tipo: string;
  numeros: any[];
  devolucion?: any;
  estado?: string;
}

@Component({
  selector: 'app-solicitar-territorio',
  templateUrl: './solicitar-territorio.component.html',
  styleUrls: ['./solicitar-territorio.component.scss']
})
export class SolicitarTerritorioComponent implements OnInit {
  hermanos: any;
  nombre: string = '';
  hermanoSeleccionado: any;
  tipoSeleccionado: string;
  solicitud: any;
  territorios: Territorio | any;
  showNav: boolean = true;

  constructor(private router: Router, private location: Location, private storageSVC: StorageService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.handleSection();
    });
  }

  handleSection() {
    this.tipoSeleccionado = this.location.path().split('/')[2];
    console.log(this.tipoSeleccionado);
  }

  ngOnInit(): void {
    this.getHermanos();
    this.getTerritorios();
    this.getSolicitud();
  }

  getSolicitud() {
    this.solicitud = JSON.parse(localStorage.getItem('solicitud'));
    this.setShowNav();
  }

  setShowNav() {
    if (this.solicitud) {
      this.showNav = false;
    }
  }
  getTerritorios() {
    switch (this.tipoSeleccionado) {
      case 'fijos':
        this.storageSVC.GetAll('territorios-fijos').subscribe((data) => {
          this.territorios = data;
          console.log(this.territorios);
        });
        break;
      case 'celulares':
        this.storageSVC.GetAll('territorios-celulares').subscribe((data) => {
          this.territorios = data;
          console.log(data);
        });
        break;
    }
  }

  getLastTerritorioByDate() {
    let fechas = [];
    let territorio = {};
    let aux = undefined;
    let territorios = this.filtrarDisponibles();

    territorios.forEach((territorio) => {
      if (territorio.devolucion === undefined) {
        aux = territorio;
      } else {
        console.log(territorio.devolucion);
        let fechaAux = new Date(territorio.devolucion);
        fechas.push(fechaAux);
      }
    });

    if (aux) return aux;

    if (!fechas) return;
    console.log(fechas);
    let primerFecha = new Date(Math.min(...fechas));
    console.log(primerFecha);
    let formatFecha = primerFecha.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    territorio = territorios.find((element) => element.devolucion == formatFecha);
    console.log(formatFecha);
    return territorio;
  }

  filtrarDisponibles(){
    let disponibles = [];
    this.territorios.forEach((territorio) => {
      if (territorio.estado === 'disponible' || territorio.estado === undefined) {
        disponibles.push(territorio);
      }
    });
    return disponibles;
  }

  getHermanos() {
    this.storageSVC.GetAll('hermanos').subscribe((data) => {
      this.hermanos = data;
      console.log(this.hermanos);
    });
  }

  seleccionarHermano(hermano: any) {
    if (this.hermanoSeleccionado) this.removeSelected();
    this.hermanoSeleccionado = '';
    this.hermanoSeleccionado = hermano;
    let card = document.querySelector(`#${hermano.id}`) as HTMLElement;
    card.classList.add('selected');
  }

  removeSelected() {
    let card = document.querySelector(`#${this.hermanoSeleccionado.id}`) as HTMLElement;
    card.classList.remove('selected');
  }

  solicitar() {
    let territorio = this.getLastTerritorioByDate();
    let hoy = new Date();

    this.solicitud = {};
    this.solicitud.hermano = this.hermanoSeleccionado;
    this.solicitud.fecha = hoy.toLocaleDateString('en-US', {
      // you can use undefined as first argument
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    this.solicitud.territorio = territorio;
    this.solicitud.tipo = this.tipoSeleccionado;
    console.log(this.solicitud);

    localStorage.setItem('solicitud', JSON.stringify(this.solicitud));
    this.storageSVC.Update(this.solicitud.territorio.id, `territorios-${this.solicitud.territorio.tipo}`, {
      estado: 'entregado',
    });
    //this.storageSVC.Insert('solicitudes', this.solicitud);

    this.setShowNav();
  }
}
