import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Hermano } from 'src/app/models/hermano.model';
import { FormValidator } from 'src/app/shared/form-validator';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-hermanos-alta',
  templateUrl: './admin-hermanos-alta.component.html',
  styleUrls: ['./admin-hermanos-alta.component.scss']
})
export class AdminHermanosAltaComponent extends FormValidator implements OnInit {
  hermano: Hermano;
  required: any;

  toco1: boolean = false;
  toco2: boolean = false;
  toco3: boolean = false;
  toco4: boolean = false;
  toco5: boolean = false;
  toco6: boolean = false;
  toco7: boolean = false;

  constructor(private FB: FormBuilder, private alertSVC: AlertService, private storageSVC: StorageService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.FB.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      congregacion: ['', [Validators.required]],
      precursor: ['', [Validators.required]],
      disponibilidad: ['', [Validators.required]],
      repeticionDiasPorMes: ['', [Validators.required]]
    });
  }

  definirMensajesError(): void {
    this.mensajesError = {
      nombre: {
        required: 'El nombre es requerido'
      },
      apellido: {
        required: 'El apellido es requerido'
      },
      fechaNacimiento: {
        required: 'La fecha de nacimiento es requerida'
      },
      congregacion: {
        required: 'La congregación es requerida'
      },
      precursor: {
        required: 'El precursor es requerido'
      },
      disponibilidad: {
        required: 'La disponibilidad es requerida'
      },
      repeticionDiasPorMes: {
        required: 'La repetición de los días por mes es requerida'
      }
    };
  }
}
