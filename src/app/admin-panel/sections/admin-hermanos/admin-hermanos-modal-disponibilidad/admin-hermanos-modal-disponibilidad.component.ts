import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { Dias, Disponibilidad, Horarios } from 'src/app/models/hermano.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AdminDisponibilidadService } from '../admin-hermanos-alta/components/admin-disponibilidad/admin-disponibilidad.service';

@Component({
  selector: 'met-admin-hermanos-modal-disponibilidad',
  templateUrl: './admin-hermanos-modal-disponibilidad.component.html',
  styleUrls: ['./admin-hermanos-modal-disponibilidad.component.scss']
})
export class AdminHermanosModalDisponibilidadComponent implements AfterViewInit {
  dias: string[] = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'];
  horarios: string[] = ['M', 'MD', 'T', 'N'];
  seleccionoSabado: boolean = false;
  seleccionoDomingo: boolean = false;
  disponibilidad: Disponibilidad[] = [];
  sabadosMes: number;
  domingosMes: number;
  @Input() disponibilidadShow: any;

  constructor(private alertSVC: AlertService, private disponibilidadSVC: AdminDisponibilidadService) {}

  ngAfterViewInit() {
    if (this.disponibilidadShow) {
      this.reset();
      this.setShowDias();
    }
  }

  ngOnInit() {
    let sabado = this.disponibilidadShow.find((d) => d.dia === 5);
    let domingo = this.disponibilidadShow.find((d) => d.dia === 6);
    if (sabado) {
      this.sabadosMes = sabado.sabadosPorMes;
    }
    if (domingo) {
      this.domingosMes = domingo.domingosPorMes;
    }
  }

  checkFinDeSemana() {
    if (this.disponibilidadShow) return;
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

    let btnDia = document.getElementById(unDia) as HTMLElement;

    if (btnDia.classList.contains('btn-success')) {
      btnDia.classList.replace('btn-success', 'btn-danger');
    } else {
      btnDia.classList.replace('btn-danger', 'btn-success');
    }
  }

  agregarQuitarHorario(unHorario: any, dia: number) {
    unHorario.forEach((h) => {
      let btnH = document.getElementById(Horarios[h + 1] + dia) as HTMLElement;
      if (btnH) {
        btnH.classList.replace('btn-danger', 'btn-success');
      }
    });
  }

  setShowDias() {
    this.setDisabled();

    this.disponibilidadShow.forEach((d) => {
      let dia = Dias[d.dia];
      if (d.dia == 1 || d.dia == 2) {
        if (d.dia == 1) dia = 'Ma';
        if (d.dia == 2) dia = 'Mi';
        this.agregarQuitarDia(dia);

        this.agregarQuitarHorario(d.horario, d.dia);
      } else {
        dia = dia.toString().split('')[0].toUpperCase();
        this.agregarQuitarDia(dia);
        this.agregarQuitarHorario(d.horario, d.dia);
      }
    });
  }

  onSetDiasFinDeSemana() {
    if (this.seleccionoSabado) {
      let sabado = this.disponibilidad.find((d) => d.dia === 5);
      sabado.sabadosPorMes = this.sabadosMes;
    }
    if (this.seleccionoDomingo) {
      let domingo = this.disponibilidad.find((d) => d.dia === 6);
      domingo.domingosPorMes = this.domingosMes;
    }
  }

  onReset() {
    this.disponibilidadSVC.getResetDisponibilidad().subscribe((reset) => {
      if (reset) this.reset();
    });
  }

  setDisabled() {
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
      btnDia.setAttribute('disabled', 'true');
      btnDia.style.opacity = '1';
    });
    idBtnHorarios.forEach((horario) => {
      let btnHorario = document.getElementById(horario) as HTMLElement;
      btnHorario.setAttribute('disabled', 'true');
      btnHorario.style.opacity = '1';
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
}
