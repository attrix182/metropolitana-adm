import { Component, OnInit } from '@angular/core';
import { Dias, Disponibilidad } from 'src/app/models/hermano.model';

@Component({
  selector: 'met-admin-disponibilidad',
  templateUrl: './admin-disponibilidad.component.html',
  styleUrls: ['./admin-disponibilidad.component.scss']
})
export class AdminDisponibilidadComponent implements OnInit {
  dias: string[] = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'];
  horarios: string[] = ['M', 'MD', 'T', 'N'];

  disponibilidad: Disponibilidad[] = [];

  constructor() {}

  ngOnInit(): void {}

  agregarQuitarDia(unDia: any) {
    let indexUnDia = this.dias.indexOf(unDia);
    let index = this.disponibilidad.findIndex((d) => d.dia === indexUnDia);

    if (index === -1) {
      this.disponibilidad.push({ dia: this.dias.indexOf(unDia), horario: [] });
    } else {
      this.disponibilidad.splice(index, 1);
    }
    console.log(this.disponibilidad);

    let btnDia = document.getElementById(unDia) as HTMLElement;

    if (btnDia.classList.contains('btn-success')) {
      btnDia.classList.replace('btn-success', 'btn-danger');
    } else {
      btnDia.classList.replace('btn-danger', 'btn-success');
    }
  }

  agregarQuitarHorario(unHorario: any, dia: number) {
    let diaExistente = this.disponibilidad.find((d) => d.dia === dia);
    if (!diaExistente) return;
    let index = diaExistente.horario.indexOf(unHorario);
    if (index === -1) {
      diaExistente.horario.push(unHorario);
    } else {
      diaExistente.horario.splice(index, 1);
    }

    console.log(this.disponibilidad);

    let btnHorario = document.getElementById(unHorario + dia) as HTMLElement;

    if (btnHorario.classList.contains('btn-success')) {
      btnHorario.classList.replace('btn-success', 'btn-danger');
    } else {
      btnHorario.classList.replace('btn-danger', 'btn-success');
    }
  }
}
