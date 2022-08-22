import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() hermanosSearch: any;;
  @Output() goToEdit = new EventEmitter<any>();

  constructor(private storageSVC:StorageService, private alertSvc:AlertService) {}

  ngOnInit(): void {
  }


    async delete(product: any) {
      console.log(product);
      let confirm: any = false;
      confirm = await this.alertSvc.confirmAlert();
      if (confirm) {
        this.storageSVC.Delete('hermanos', product.id).then(() => {
          this.alertSvc.alertCenter('info', 'El producto ha sido eliminado');
        });
      }
    }

     update(product: any) {
      this.goToEdit.emit(product);
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