import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Disponibilidad, Hermano } from 'src/app/models/hermano.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'met-admin-hermanos-listado',
  templateUrl: './admin-hermanos-listado.component.html',
  styleUrls: ['./admin-hermanos-listado.component.scss']
})
export class AdminHermanosListadoComponent implements OnInit {
  @Input() hermanos: any[];
  searchParam: string;
  @Input() hermanosSearch: any;
  @Output() goToEdit = new EventEmitter<any>();
  disponibilidadShow: Disponibilidad[];
  hermanoSeleccionado:string;

  @ViewChild('disponibilidadModal', { read: TemplateRef })
  disponibilidadModal: TemplateRef<any>;

  constructor(private storageSVC: StorageService, private alertSvc: AlertService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  async delete(product: any) {
    let confirm: any = false;
    confirm = await this.alertSvc.confirmAlert();
    if (confirm) {
      this.storageSVC.Delete('hermanos', product.id).then(() => {
        this.alertSvc.alertCenter('info', 'El hermano ha sido eliminado');
      });
    }
  }

  update(product: any) {
    this.goToEdit.emit(product);
  }

  showDisponibilidad(uno: Hermano) {
    this.disponibilidadShow = uno.disponibilidad;
    this.hermanoSeleccionado = uno.nombre + ' ' + uno.apellido

    this.modalService.open(this.disponibilidadModal);
  }

  hacerBusqueda() {
    if (this.searchParam === '') {
      this.hermanos = this.hermanosSearch;
      return;
    }
    const serachParamLower = this.searchParam.toLowerCase();
    this.hermanos = this.hermanosSearch.filter((item) => this.doSearch(item, serachParamLower));
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
