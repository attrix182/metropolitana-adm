import { Component, OnInit } from '@angular/core';
import { Dias } from 'src/app/models/hermano.model';
import { Turno } from 'src/app/models/turno.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  hoy: string;
  hoyDay: any;
  turnos: Turno[] = [];
  diaString: string;

  constructor(private storageSVC: StorageService) {
    this.hoy = new Date().toLocaleDateString();
    this.hoyDay = new Date().getDay();
    this.diaString = Dias[this.hoyDay - 1];
  }

  ngOnInit(): void {
    this.getTurnosHoy();
  }

  getTurnosHoy() {
    console.log(Dias[this.hoyDay - 1]);
    this.storageSVC.GetAll('turnos').subscribe((turnos: any) => {
      console.log(turnos);
      this.turnos = turnos.filter((turno: Turno) => {
        return turno.horario.dia.name == Dias[this.hoyDay - 1];
      });
    });
  }
}
