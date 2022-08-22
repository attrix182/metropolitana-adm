import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent{
  public section: string;

  constructor(private router: Router, private location: Location) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.handleSection();
    });
  }


  handleSection() {
    this.section = this.location.path().split('/')[1];
    this.section = 'admin-hermanos'; //remover solo test
  }
}
