import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValidator } from 'src/app/shared/form-validator';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Horario } from 'src/app/models/horario.model';
import { Punto } from 'src/app/models/puntos.model';
@Component({
  selector: 'met-admin-informes',
  templateUrl: './admin-informes.component.html',
  styleUrls: ['./admin-informes.component.scss']
})
export class AdminInformesComponent  extends FormValidator implements OnInit {
  public formGroup: FormGroup;
  loading:boolean = false;
  puntos: Punto[];
  horarios: Horario[];

  constructor(private FB: FormBuilder, private alertSVC: AlertService, private storageSVC: StorageService) {
    super()
  }

  ngOnInit(): void {
    this.initForm();
    this.getPuntos()
    this.getHorarios();
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


  saveInforme(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  initForm(){
    this.formGroup = this.FB.group({
      punto: ['', [Validators.required]],
      horario: ['', [Validators.required]],
      fecha: ['', []],
      publicaciones: ['', []],
      videos: ['', []],
    });
  }

  definirMensajesError(): void {
      
  }

}
