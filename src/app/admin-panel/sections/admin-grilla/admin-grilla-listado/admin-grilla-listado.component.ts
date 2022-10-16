import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Horarios } from 'src/app/models/hermano.model';
import { Horario } from 'src/app/models/horario.model';
import { Punto } from 'src/app/models/puntos.model';
import { Turno } from 'src/app/models/turno.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-grilla-listado',
  templateUrl: './admin-grilla-listado.component.html',
  styleUrls: ['./admin-grilla-listado.component.scss']
})
export class AdminGrillaListadoComponent implements OnInit {
  searchParam: string;
  formGroup: FormGroup;
  turnosSearch: Turno[];
  turnos: Turno[];
  puntos: Punto[];
  horarios: Horario[];

  constructor(private storageSVC: StorageService, private alertSvc: AlertService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getTurnos();
    this.getPuntos();
    this.getHorarios();
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      punto: ['', []],
      horario: ['', []]
    });
  }

  searchByParameters(campo, param) {
    if (campo == 'horario') {
      this.storageSVC.GetByParameter('turnos', 'horario', param).subscribe((data) => {
        this.turnos = data;
        console.log(data);
      });
    } else if (campo == 'punto') {
      this.storageSVC.GetByParameter('turnos', 'punto', param).subscribe((data) => {
        this.turnos = data;
        console.log(data);
      });
    }
  }

  buscarTurno() {
    console.log(this.formGroup.value);
    let punto = this.formGroup.value.punto
    if(punto){
      this.searchByParameters('punto', punto)
    }
  
  }

  getPuntos() {
    this.storageSVC.GetAll('puntos').subscribe((puntos) => {
      this.puntos = puntos;
    });
  }

  getHorarios() {
    this.storageSVC.GetAll('horarios').subscribe((horarios) => {
      this.horarios = horarios;
    });
  }

  getTurnos() {
    this.storageSVC.GetAll('turnos').subscribe((turnos) => {
      this.turnos = turnos;
      this.turnosSearch = turnos;
    });
  }

  async delete(turno: Turno) {
    let confirm: any = false;
    confirm = await this.alertSvc.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('turnos', turno.id).then(() => {
        this.alertSvc.alertCenter('info', 'El Turno ha sido eliminado');
      });
    }
  }
}
