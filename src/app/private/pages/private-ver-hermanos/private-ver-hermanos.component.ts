import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-private-ver-hermanos',
  templateUrl: './private-ver-hermanos.component.html',
  styleUrls: ['./private-ver-hermanos.component.scss'],
})
export class PrivateVerHermanosComponent implements OnInit {
  hermanos: any;
  searchParam: any;
  loaded: boolean = false;

  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);

    this.getHermanos();
  }

  getHermanos() {
    this.storageSVC.GetAll('hermanos').subscribe((data) => {
      this.hermanos = data;
      console.log(this.hermanos);
    });
  }
}
