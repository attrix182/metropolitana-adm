import { Component, OnInit } from '@angular/core';
import { Punto } from 'src/app/models/puntos.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-puntos',
  templateUrl: './admin-puntos.component.html',
  styleUrls: ['./admin-puntos.component.scss']
})
export class AdminPuntosComponent implements OnInit {
  puntos: Punto[];
  puntoSeleccionado:Punto;
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getPuntos();
  }

  modificarPunto(punto?){
    this.puntoSeleccionado = punto;
  }

  getPuntos() {
    this.storage.GetAll('puntos').subscribe((data) => {
      this.puntos = data;
    });
  }
}
