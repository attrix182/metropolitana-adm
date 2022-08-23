import { Component, Input, OnInit } from '@angular/core';
import { Punto } from 'src/app/models/puntos.model';

@Component({
  selector: 'met-admin-puntos-listado',
  templateUrl: './admin-puntos-listado.component.html',
  styleUrls: ['./admin-puntos-listado.component.scss']
})
export class AdminPuntosListadoComponent implements OnInit {
  @Input() puntos: Punto[]

  constructor() { }

  ngOnInit(): void {
  }

}
