import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'met-admin-grilla',
  templateUrl: './admin-grilla.component.html',
  styleUrls: ['./admin-grilla.component.scss']
})
export class AdminGrillaComponent implements OnInit {
  showFormAlta:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.showFormAlta = !this.showFormAlta;
  }

}
