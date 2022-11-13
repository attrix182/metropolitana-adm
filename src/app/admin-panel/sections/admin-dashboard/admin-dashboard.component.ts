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
  loading:boolean = true;

  constructor(private storageSVC: StorageService) {
    this.hoy = new Date().toLocaleDateString();
    this.hoyDay = new Date().getDay();
    this.diaString = Dias[this.hoyDay - 1];

    if (this.hoyDay - 1 == -1) {
      this.hoyDay = 7;
    }
  }

  ngOnInit(): void {
    this.getTurnosHoy();
  }

  getTurnosHoy() {
    this.loading = true;
    console.log(Dias[this.hoyDay - 1]);
    this.storageSVC.GetAll('turnos').subscribe((turnos: any) => {
      console.log(turnos);
      this.turnos = turnos.filter((turno: Turno) => {
        return turno.horario.dia.name == Dias[this.hoyDay - 1];
      });
      this.loading = false;
    });
  }
}
