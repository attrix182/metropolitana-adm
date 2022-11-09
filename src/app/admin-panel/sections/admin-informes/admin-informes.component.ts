import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValidator } from 'src/app/shared/form-validator';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Horario } from 'src/app/models/horario.model';
import { Punto } from 'src/app/models/puntos.model';
import { Turno } from 'src/app/models/turno.model';
@Component({
  selector: 'met-admin-informes',
  templateUrl: './admin-informes.component.html',
  styleUrls: ['./admin-informes.component.scss']
})
export class AdminInformesComponent extends FormValidator implements OnInit {
  public formGroup: FormGroup;
  loading: boolean = false;
  puntos: Punto[];
  horarios: Horario[];
  informes: any[];
  showInformesAlta:boolean = true;

  constructor(private FB: FormBuilder, private alertSVC: AlertService, private storageSVC: StorageService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.getPuntos();
    this.getInformes();
  }

  toggleShow(){
    this.showInformesAlta = !this.showInformesAlta;
  }

  getPuntos() {
    this.storageSVC.GetAll('puntos').subscribe((puntos) => {
      this.puntos = puntos;
    });
  }

  onChangePunto() {
    this.getHorarios(this.formGroup.value.punto);
  }

  getHorarios(punto) {
    this.storageSVC.GetByParameter('turnos', 'punto', punto).subscribe((data) => {
      this.horarios = [];
      this.turnoToHorario(data);
      console.log(data);
    });
  }

  turnoToHorario(turno: Turno[]) {

    turno.forEach((element) => {
      this.horarios.push(element.horario.horario);
    });
  }

  getInformes() {
    this.storageSVC.GetAll('informes').subscribe((informes) => {
      this.informes = informes;
    });
  }

  saveInforme() {
    this.loading = true;
    let informe: any = {};
    informe.turno = {
      punto: this.formGroup.value.punto,
      horario: this.formGroup.value.horario,
      fecha: this.formGroup.value.fecha
    };
    informe.publicaciones = this.formGroup.value.publicaciones;
    informe.videos = this.formGroup.value.videos;
    console.log(informe);
    this.storageSVC
      .Insert('informes', informe)
      .then((data) => {
        this.alertSVC.alertCenter('success', 'Informe guardado con éxito');
        this.loading = false;
        this.formGroup.reset()
        informe = {}
      })
      .catch((error) => {
        this.alertSVC.alertCenter('error', 'Error al guardar el informe');
        this.loading = false;
      });
  }

  initForm() {
    this.formGroup = this.FB.group({
      punto: ['', [Validators.required]],
      horario: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      publicaciones: ['', [Validators.required]],
      videos: ['', [Validators.required]],
    });
  }

  definirMensajesError(): void {}
}
