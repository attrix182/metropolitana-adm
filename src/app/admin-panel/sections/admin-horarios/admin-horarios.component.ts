import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-horarios',
  templateUrl: './admin-horarios.component.html',
  styleUrls: ['./admin-horarios.component.scss']
})
export class AdminHorariosComponent implements OnInit {
  horarios: Horario[];
  horarioSeleccionado: Horario;
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getHorarios();
  }

  updateHorario(horario?) {
    this.horarioSeleccionado = horario;
  }

  getHorarios() {
    this.storage.GetAll('horarios').subscribe((data) => {
      this.sortHorarios(data);
      this.horarios = data;
    });
  }

  sortHorarios(data: Horario[]) {
    data.sort((ha, hb) => {
      if (ha.horarioInicio > hb.horarioInicio) {
        return 1;
      }
      if (ha.horarioInicio < hb.horarioInicio) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
}
