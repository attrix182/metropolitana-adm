import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-grilla-listado',
  templateUrl: './admin-grilla-listado.component.html',
  styleUrls: ['./admin-grilla-listado.component.scss']
})
export class AdminGrillaListadoComponent implements OnInit {
  searchParam: string;
  turnosSearch: Turno[];
  turnos: Turno[];

  constructor(private storageSVC: StorageService, private alertSvc:AlertService) {}

  ngOnInit(): void {
    this.getTurnos();
  }

  getTurnos() {
    this.storageSVC.GetAll('turnos').subscribe((turnos) => {
      this.turnos = turnos;
      this.turnosSearch = turnos;
    });
  }

  async delete(turno: Turno) {
    let confirm: any = false;
    confirm = await this.alertSvc.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('turnos', turno.id).then(() => {
        this.alertSvc.alertCenter('info', 'El Turno ha sido eliminado');
      });
    }
  }

  hacerBusqueda() {
    if (this.searchParam === '') {
      this.turnos = this.turnosSearch;
      return;
    }
    const serachParamLower = this.searchParam.toLowerCase();
    this.turnos = this.turnosSearch.filter((item) => this.doSearch(item, serachParamLower));
  }

  doSearch(value, searcher) {
    if (typeof value === 'boolean') {
      return false;
    }

    if (typeof value === 'object') {
      for (let fieldKey in value) {
        if (this.doSearch(value[fieldKey], searcher)) {
          return true;
        }
      }
      return false;
    }

    return (typeof value == 'string' ? value.toLocaleLowerCase() : value.toString()).includes(searcher);
  }
}
