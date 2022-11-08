import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Turno } from 'src/app/models/turno.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AdminGrillaService } from '../../admin-grilla.service';

@Component({
  selector: 'met-admin-grilla-alta-confirmacion',
  templateUrl: './admin-grilla-alta-confirmacion.component.html',
  styleUrls: ['./admin-grilla-alta-confirmacion.component.scss']
})
export class AdminGrillaAltaConfirmacionComponent implements OnInit {
  turno: Turno;
  showTable: boolean = false;
  loading: boolean = false;

  constructor(
    private grillaSVC: AdminGrillaService,
    private storageSVC: StorageService,
    private alertSVC: AlertService,
    private router: Router,
    private adminGrillaService: AdminGrillaService
  ) {}

  ngOnInit(): void {
    this.confeccionarTurno();
  }

  ngAfterViewInit() {
    this.confeccionarTurno();
  }

  setShow(turno) {
    if (turno.horario != undefined && turno.hermanos.length > 0 && turno.punto != undefined) {
      this.showTable = true;
    } else {
      this.showTable = false;
    }
  }

  publicarTurno() {
    this.loading = true;
    
    this.storageSVC
      .Insert('turnos', this.turno)
      .then(() => {
        this.loading = false;
        this.alertSVC.alertCenter('success', 'Turno agregado exitosamente');
        this.adminGrillaService.resetAll();
        setTimeout(() => {
          this.adminGrillaService.setView('listado');
        }, 150);
      })
      .catch(() => {
        this.loading = false;
        this.alertSVC.alertCenter('error', 'Error. no se pudo agregar');
      });
  }

  confeccionarTurno() {
    this.grillaSVC.getTurno$().subscribe((response) => {
      this.turno = response;
      console.log(response)
      this.setShow(response);
    });
  }
}
