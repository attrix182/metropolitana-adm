import { Component, OnInit } from '@angular/core';
import { Dias, Disponibilidad } from 'src/app/models/hermano.model';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'met-admin-disponibilidad',
  templateUrl: './admin-disponibilidad.component.html',
  styleUrls: ['./admin-disponibilidad.component.scss']
})
export class AdminDisponibilidadComponent implements OnInit {
  dias: string[] = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'];
  horarios: string[] = ['M', 'MD', 'T', 'N'];
  seleccionoSabado: boolean = false;
  seleccionoDomingo: boolean = false;

  disponibilidad: Disponibilidad[] = [];
  sabadosMes: number = 0;

  domingosMes: number = 0;

  constructor(private alertSVC: AlertService) {}

  ngOnInit(): void {}

  checkFinDeSemana() {
    if (this.disponibilidad.find((d) => d.dia === 5)) {
      this.seleccionoSabado = true;
    } else {
      this.sabadosMes = 0;
      this.seleccionoSabado = false;
    }

    if (this.disponibilidad.find((d) => d.dia === 6)) {
      this.seleccionoDomingo = true;
    } else {
      this.domingosMes = 0;
      this.seleccionoDomingo = false;
    }
  }

  agregarQuitarDia(unDia: any) {
    let indexUnDia = this.dias.indexOf(unDia);
    let index = this.disponibilidad.findIndex((d) => d.dia === indexUnDia);

    if (index === -1) {
      this.disponibilidad.push({ dia: this.dias.indexOf(unDia), horario: [] });
    } else {
      this.disponibilidad.splice(index, 1);
    }
    this.checkFinDeSemana();
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
    if (!diaExistente) {
      this.alertSVC.alertCenter('warning', 'No seleccionaste ese día');
      return;
    }
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

  onSetDiasFinDeSemana() {
    console.log(this.disponibilidad);
    if (this.seleccionoSabado) {
      let sabado = this.disponibilidad.find((d) => d.dia === 5);
      sabado.sabadosPorMes = this.sabadosMes;
    }
    if (this.seleccionoDomingo) {
      let domingo = this.disponibilidad.find((d) => d.dia === 6);
      domingo.domingosPorMes = this.domingosMes;
    }
  }
}
