import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { FormValidator } from 'src/app/shared/form-validator';

@Component({
  selector: 'app-private-agregar-territorio',
  templateUrl: './private-agregar-territorio.component.html',
  styleUrls: ['./private-agregar-territorio.component.scss']
})
export class PrivateAgregarTerritorioComponent extends FormValidator implements OnInit {
  tipoSeleccionado: string;
  territorio: any;
  territorios: any;

  constructor(private FB: FormBuilder, private storageSVC: StorageService, private alertSVC: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.selectFijos();
    this.getTerritorios();
    this.initializeForm();
  }

  getTerritorios() {
    this.storageSVC.GetAll(`territorios-${this.tipoSeleccionado}`).subscribe((data) => {
      this.territorios = data;
    });
  }

  existeTerritorio() {
    let existe = false;
    this.territorios.forEach((territorio) => {
      if (territorio.id === this.formGroup.value.numero) {
        existe = true;
        this.formGroup.controls.numero.setErrors({ existe: true });
      }
    });
    console.log(existe);
    return existe;
  }

  definirMensajesError(): void {
    this.mensajesError = {
      numero: {
        required: 'El número es requerido',
        pattern: 'Solo puede ser un número',
        existe: 'El territorio ya existe'
      },
      numeros: {
        required: 'Los números son requeridos',
        pattern: 'Solo puede ser un número'
      }
    };
  }

  addTerritorio() {
    let numeroFormateados = this.formGroup.value.numeros.split('\n');

    this.territorio = {
      id: this.formGroup.value.numero,
      tipo: this.tipoSeleccionado,
      numeros: numeroFormateados
    };
    this.storageSVC.InsertCustomID(`territorios-${this.tipoSeleccionado}`, this.territorio.id, this.territorio);
    this.alertSVC.alertBottom('success', 'Territorio agregado correctamente');
    this.formGroup.reset();
    console.log(this.territorio);
  }

  initializeForm() {
    this.formGroup = this.FB.group({
      numero: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      numeros: new FormControl('', [Validators.required, Validators.pattern('^[0-9-)()/\n ]*$')])
    });
  }

  selectFijos() {
    this.tipoSeleccionado = 'fijos';
    this.removeAllClass();
    let button = document.querySelector('#fijos') as HTMLElement;
    button.classList.add('selected');
    this.getTerritorios();
  }

  selectCelulares() {
    this.tipoSeleccionado = 'celulares';
    this.removeAllClass();
    let button = document.querySelector('#celulares') as HTMLElement;
    button.classList.add('selected');
    this.getTerritorios();
  }

  removeAllClass() {
    let button1 = document.querySelector('#fijos') as HTMLElement;
    let button2 = document.querySelector('#celulares') as HTMLElement;
    button1.classList.remove('selected');
    button2.classList.remove('selected');
  }
}
