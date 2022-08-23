import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Disponibilidad } from 'src/app/models/hermano.model';
import { Punto } from 'src/app/models/puntos.model';
import { FormValidator } from 'src/app/shared/form-validator';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
@Component({
  selector: 'met-admin-puntos-alta',
  templateUrl: './admin-puntos-alta.component.html',
  styleUrls: ['./admin-puntos-alta.component.scss']
})
export class AdminPuntosAltaComponent extends FormValidator implements OnInit {
  punto: Punto;
  disponibilidad: Disponibilidad[];
  showErrorDisponibilidad: boolean = false;
  loading: boolean = false;

  constructor(private FB: FormBuilder, private alertSVC: AlertService, private storageSVC: StorageService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  savePunto() {
    if (this.loading) return;
    this.loading = true;
    this.punto = this.formGroup.value;

    this.storageSVC.Insert('puntos', this.punto).then(() => {
      this.alertSVC.alertTop('success', 'Punto guardado correctamente');
      this.formGroup.reset();
      this.loading = false;
    });
  }

  initForm() {
    this.formGroup = this.FB.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      descripcion: ['', []]
    });
  }

  definirMensajesError(): void {
    this.mensajesError = {
      nombre: {
        required: 'El nombre es requerido'
      },
      direccion: {
        required: 'La direccion es requerida'
      },
      descripcion: {
        required: 'La direccion es requerida'
      }
    };
  }
}
