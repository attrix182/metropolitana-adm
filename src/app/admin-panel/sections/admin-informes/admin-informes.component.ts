import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValidator } from 'src/app/shared/form-validator';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
@Component({
  selector: 'met-admin-informes',
  templateUrl: './admin-informes.component.html',
  styleUrls: ['./admin-informes.component.scss']
})
export class AdminInformesComponent  extends FormValidator implements OnInit {
  public formGroup: FormGroup;
  loading:boolean = false;


  constructor(private FB: FormBuilder, private alertSVC: AlertService, private storageSVC: StorageService) {
    super()
  }

  ngOnInit(): void {
    this.initForm();
  }

  saveInforme(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  initForm(){
    this.formGroup = this.FB.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      descripcion: ['', []],
    });
  }

  definirMensajesError(): void {
      
  }

}
