import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Hermano } from '../../../models/hermano.model';
@Component({
  selector: 'met-admin-hermanos',
  templateUrl: './admin-hermanos.component.html',
  styleUrls: ['./admin-hermanos.component.scss']
})
export class AdminHermanosComponent implements OnInit {

  showFormAlta: boolean = false;
  hermanos:Hermano[];
  constructor(private storageSVC:StorageService) {}

  ngOnInit(): void {
    this.getHermanos();
  }

  setShowFormAlta(){
    this.showFormAlta = !this.showFormAlta;
  }

  getHermanos(){
    this.storageSVC.GetAll('hermanos').subscribe((hermanos:Hermano[])=>{
      this.hermanos = hermanos;
    }
    );
  }
}
