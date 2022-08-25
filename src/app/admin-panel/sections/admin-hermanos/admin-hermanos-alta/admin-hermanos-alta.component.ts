import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';
import { Dias, Disponibilidad, Hermano, Horarios } from 'src/app/models/hermano.model';
import { FormValidator } from 'src/app/shared/form-validator';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AdminDisponibilidadService } from './components/admin-disponibilidad/admin-disponibilidad.service';

@Component({
  selector: 'met-admin-hermanos-alta',
  templateUrl: './admin-hermanos-alta.component.html',
  styleUrls: ['./admin-hermanos-alta.component.scss']
})
export class AdminHermanosAltaComponent extends FormValidator implements OnInit {
  hermano: Hermano;
  disponibilidad: Disponibilidad[];
  showErrorDisponibilidad: boolean = false;
  loading: boolean = false;
  @Input() hermanoToEdit: any;

  constructor(
    private FB: FormBuilder,
    private alertSVC: AlertService,
    private storageSVC: StorageService,
    private disponibilidadSVC: AdminDisponibilidadService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.getDisponibilidad();
    this.fillToEdit();
  }

  fillToEdit() {
    if (!this.hermanoToEdit) return;
    this.formGroup.setValue({
      nombre: this.hermanoToEdit.nombre,
      apellido: this.hermanoToEdit.apellido,
      fechaNacimiento: this.hermanoToEdit.fechaNacimiento,
      congregacion: this.hermanoToEdit.congregacion,
      precursor: this.hermanoToEdit.precursor
    });
    this.disponibilidad = this.hermanoToEdit.disponibilidad;
  }

  saveHermano() {
    if (this.loading) return;
    this.loading = true;

    if (this.hermanoToEdit) {
      this.updateHermano();
    } else {
      this.formatHermano();
      let noSeteoHorario = this.disponibilidad.filter((d) => d.horario.length == 0).length == 0;
      if (noSeteoHorario) {
        this.storageSVC.Insert('hermanos', this.hermano).then(() => {
          this.alertSVC.alertTop('success', 'Hermano guardado correctamente');
          this.formGroup.reset();
          this.disponibilidadSVC.setResetDisponibilidad(true);
          this.loading = false;
        });
      } else {
        this.alertSVC.alertCenter('error', 'Debe seleccionar un horario para cada día');
        this.showErrorDisponibilidad = true;
      }
    }
  }

  updateHermano() {
    let hermanoModificado = this.formGroup.value;
    let id = this.hermanoToEdit.id.toString();
    this.formatHermano();
      this.storageSVC.Update(id, 'hermanos', hermanoModificado).then(() => {
        this.alertSVC.alertTop('success', 'Hermano modificado correctamente');
        this.formGroup.reset();
        this.disponibilidadSVC.setResetDisponibilidad(true);
        this.loading = false;
      });
    
  }

  formatHermano() {
    this.hermano = this.formGroup.value;
    this.setEdad(this.hermano);
    this.hermano.disponibilidad = this.disponibilidad;
    this.hermano.activo = true;
    if (!this.hermano.precursor) this.hermano.precursor = false;
  }

  setEdad(hermano: Hermano) {
    let fechaNacimiento = new Date(hermano.fechaNacimiento);
    hermano.edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
  }

  getDisponibilidad() {
    this.disponibilidadSVC.getDisponibilidad$().subscribe((disponibilidad) => {
      this.disponibilidad = disponibilidad;
      this.setErrorDisponibilidad();
    });
  }

  setErrorDisponibilidad() {
    let isEmpty = this.disponibilidad.length == 0;
    if (isEmpty) {
      this.showErrorDisponibilidad = true;
    } else {
      this.showErrorDisponibilidad = false;
    }
  }

  initForm() {
    this.formGroup = this.FB.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      congregacion: ['', [Validators.required]],
      precursor: ['', []]
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
