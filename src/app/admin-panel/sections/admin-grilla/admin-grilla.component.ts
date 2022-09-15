import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdminGrillaService } from './admin-grilla.service';

@Component({
  selector: 'met-admin-grilla',
  templateUrl: './admin-grilla.component.html',
  styleUrls: ['./admin-grilla.component.scss']
})
export class AdminGrillaComponent implements OnInit {
  showFormAlta: boolean = false;

  constructor(private adminGrillaService: AdminGrillaService) {}

  ngOnInit(): void {
    this.updateView();
  }

  updateView() {
    this.adminGrillaService.getView$().subscribe((view) => {
      if (view == 'alta') {
        this.showFormAlta = true;
      } else {
        this.showFormAlta = false;
      }
    });
  }

  toggleShow() {
    this.showFormAlta = !this.showFormAlta;
  }
}
