import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno.model';
import { AdminGrillaService } from '../../admin-grilla.service';

@Component({
  selector: 'met-admin-grilla-alta-confirmacion',
  templateUrl: './admin-grilla-alta-confirmacion.component.html',
  styleUrls: ['./admin-grilla-alta-confirmacion.component.scss']
})
export class AdminGrillaAltaConfirmacionComponent implements OnInit {
  turno: Turno;
  showTable: boolean = false;

  constructor(private grillaSVC: AdminGrillaService) {}

  ngOnInit(): void {
    this.confeccionarTurno();
  }

  ngAfterViewInit() {
    this.confeccionarTurno();
  }

  setShow(turno) {
    if (turno.horario != undefined && turno.hermanos.length > 0  && turno.punto != undefined) {
      this.showTable = true;
      console.log("MUESTRO LOS DATOS");
    } else {
      this.showTable = false;
      console.log("NO MUESTRO NADA");
    }
  }

  confeccionarTurno() {
    this.grillaSVC.getTurno$().subscribe((response) => {
      this.turno = response;
      this.setShow(response);
      console.log(this.turno);
    });

  }
}
