import { Component, OnInit } from '@angular/core';
import { Dias, Hermano, Horarios } from '../../../models/hermano.model';
@Component({
  selector: 'met-admin-hermanos',
  templateUrl: './admin-hermanos.component.html',
  styleUrls: ['./admin-hermanos.component.scss']
})
export class AdminHermanosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let hoy = new Date();

    let juan: Hermano = {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      fechaNacimiento: new Date('2001-05-17T00:00:00'),
      congregacion: 'San Pedro',
      precursor: true,
      disponibilidad: [
        {
          dia: Dias.lunes,
          horario: [Horarios.M, Horarios.MD]
        },
        {
          dia: Dias.martes,
          horario: [Horarios.M]
        }
      ]
    };

    let marta: Hermano = {
      id: 1,
      nombre: 'Marta',
      apellido: 'Rodriguez',
      fechaNacimiento: new Date('1987-05-11T00:00:00'),
      congregacion: 'Villa luro',
      precursor: false,
      disponibilidad: [
        {
          dia: Dias.miercoles,
          horario: [Horarios.M, Horarios.N]
        },
        {
          dia: Dias.jueves,
          horario: [Horarios.TD]
        }
      ]
    };

    this.setEdad(juan);
    this.setEdad(marta);

    this.listarDatos(juan);
  }

  listarDatos(hermano: Hermano) {
    console.log(hermano);
    hermano.disponibilidad.forEach((unDia) => {
      console.log('_______DIA_______');
      console.log(Dias[unDia.dia]);

      unDia.horario.forEach((unHorario) => {
        console.log(Horarios[unHorario]);
      });
    });
  }

  setEdad(hermano: Hermano) {
    hermano.edad = new Date().getFullYear() - hermano.fechaNacimiento.getFullYear();
  }
}
