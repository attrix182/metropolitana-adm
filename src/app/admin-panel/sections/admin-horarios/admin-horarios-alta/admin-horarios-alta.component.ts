import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Horario } from 'src/app/models/horarios.model';
import { FormValidator } from 'src/app/shared/form-validator';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-horarios-alta',
  templateUrl: './admin-horarios-alta.component.html',
  styleUrls: ['./admin-horarios-alta.component.scss']
})
export class AdminHorariosAltaComponent extends FormValidator implements OnInit {

  horario: Horario;
  horarios: Horario[];
  showErrorDisponibilidad: boolean = false;
  loading: boolean = false;
  edit:boolean = false;
  @Input() horarioModificacion: Horario;

  constructor(private FB: FormBuilder, private alertSVC: AlertService, private storageSVC: StorageService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    if (this.horarioModificacion) {
      this.edit = true;
      this.formGroup.setValue({
        horarioInicio: this.horarioModificacion.horarioInicio,
        horarioFin: this.horarioModificacion.horarioFin

      });
    }
  }

  updateHorario(){
    let horarioModificado = this.formGroup.value;
    let id = this.horarioModificacion.id.toString();
    this.storageSVC.Update(id,'horarios',horarioModificado).then(() => {
      this.alertSVC.alertTop('success', 'Horario modificado correctamente');
      this.formGroup.reset();
      this.loading = false;
    });
  }

 saveHorario() {
    if (this.loading) return;
    this.loading = true;

    if(this.edit){
    this.updateHorario();
    }else{
    this.horario = this.formGroup.value;

    this.storageSVC.Insert('horarios', this.horario).then(() => {
      this.alertSVC.alertTop('success', 'Horario guardado correctamente');
      this.formGroup.reset();
      this.loading = false;
    });
  }
  }


  initForm() {
    this.formGroup = this.FB.group({
      horarioInicio: ['', Validators.required],
      horarioFin: ['', Validators.required]
    
    });
  }

  definirMensajesError(): void {
    this.mensajesError = {
      horarioInicio: {
        required: 'El horario de inicio es requerido'
      },
      horarioFin: {
        required: 'El horario de fin es requerido'
      }
    };
  }
}
