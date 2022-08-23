import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'met-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  hoy:string;

  constructor() { 
    this.hoy = new Date().toLocaleDateString();
  }

  ngOnInit(): void {
  }

}
