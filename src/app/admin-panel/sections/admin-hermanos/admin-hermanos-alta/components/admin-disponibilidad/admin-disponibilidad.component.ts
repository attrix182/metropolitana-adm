import { Component, Input, OnInit, Output } from '@angular/core';
import { Dias, Disponibilidad, Horarios } from 'src/app/models/hermano.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AdminDisponibilidadService } from './admin-disponibilidad.service';

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
  @Input() disponibilidadEdit: any;

  constructor(private alertSVC: AlertService, private disponibilidadSVC: AdminDisponibilidadService) {}

  ngOnInit(): void {
    this.onReset();
  }

  ngAfterViewInit() {
    if (this.disponibilidadEdit) {
      this.reset();
      this.setShowDias();
    }
  }

  checkFinDeSemana() {
    if (this.disponibilidadEdit) return;
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
    this.sendDisponibilidad();
    this.checkFinDeSemana();

    let btnDia = document.getElementById(unDia) as HTMLElement;

    if (btnDia.classList.contains('btn-success')) {
      btnDia.classList.replace('btn-success', 'btn-danger');
    } else {
      btnDia.classList.replace('btn-danger', 'btn-success');
    }
  }

  agregarQuitarHorarioInit(unHorario: any, dia: number) {
    if (unHorario.length > 0) {
      unHorario.forEach((h) => {
        let btnH = document.getElementById(Horarios[h + 1] + dia) as HTMLElement;
        if (btnH) {
          btnH.classList.replace('btn-danger', 'btn-success');
        }
      });
      return;
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
      diaExistente.horario.push(this.horarios.indexOf(unHorario));
    } else {
      diaExistente.horario.splice(index, 1);
    }
    this.sendDisponibilidad();
    let btnHorario = document.getElementById(unHorario + dia) as HTMLElement;
    if (btnHorario.classList.contains('btn-success')) {
      btnHorario.classList.replace('btn-success', 'btn-danger');
    } else {
      btnHorario.classList.replace('btn-danger', 'btn-success');
    }
  }

  setShowDias() {
    this.onReset();
    return; //Parche momentaneo
    this.disponibilidadEdit.forEach((d) => {
      let dia = Dias[d.dia];
      if (d.dia == 1 || d.dia == 2) {
        if (d.dia == 1) dia = 'Ma';
        if (d.dia == 2) dia = 'Mi';
        this.agregarQuitarDia(dia);

        this.agregarQuitarHorarioInit(d.horario, d.dia);
      } else {
        dia = dia.toString().split('')[0].toUpperCase();
        this.agregarQuitarDia(dia);
        this.agregarQuitarHorarioInit(d.horario, d.dia);
      }
    });
  }

  onSetDiasFinDeSemana() {
    if (this.seleccionoSabado) {
      let sabado = this.disponibilidad.find((d) => d.dia === 5);
      sabado.sabadosPorMes = this.sabadosMes;
      this.sendDisponibilidad();
    }
    if (this.seleccionoDomingo) {
      let domingo = this.disponibilidad.find((d) => d.dia === 6);
      domingo.domingosPorMes = this.domingosMes;
      this.sendDisponibilidad();
    }
  }

  onReset() {
    this.disponibilidadSVC.getResetDisponibilidad().subscribe((reset) => {
      if (reset) this.reset();
      this.sendDisponibilidad();
    });
  }

  reset() {
    this.disponibilidad = [];

    let idBtnDias = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'];
    let idBtnHorarios = [
      'M0',
      'MD0',
      'T0',
      'N0',
      'M1',
      'MD1',
      'T1',
      'N1',
      'M2',
      'MD2',
      'T2',
      'N2',
      'M3',
      'MD3',
      'T3',
      'N3',
      'M4',
      'MD4',
      'T4',
      'N4',
      'M5',
      'MD5',
      'T5',
      'N5',
      'M6',
      'MD6',
      'T6',
      'N6'
    ];

    idBtnDias.forEach((dia) => {
      let btnDia = document.getElementById(dia) as HTMLElement;
      btnDia.classList.replace('btn-success', 'btn-danger');
    });
    idBtnHorarios.forEach((horario) => {
      let btnHorario = document.getElementById(horario) as HTMLElement;
      btnHorario.classList.replace('btn-success', 'btn-danger');
    });
  }

  sendDisponibilidad() {
    this.disponibilidadSVC.setDisponibilidad(this.disponibilidad);
  }
}
