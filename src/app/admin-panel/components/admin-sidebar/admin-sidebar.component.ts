import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'met-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements AfterViewInit {
  @Output() changeSection = new EventEmitter<any>();
  actualSection = this.router.url.split('/')[1];
  sideItems: any[];

  constructor(private router: Router, private location: Location) {
    this.setSideItems();
  }

  ngAfterViewInit() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('show');
  }

  goTo(section: string) {
    this.location.replaceState(`/${section}`);
    this.actualSection = section;
    this.changeSection.emit();
  }


  setSideItems() {
    this.sideItems = [
      {
        name: 'Dashboard',
        icon: 'fas fa-cog',
        link: 'admin-dashboard'
      },
      {
        name: 'Hermanos',
        icon: 'fas fa-user',
        link: 'admin-hermanos'
      },
      {
        name: 'Horarios',
        icon: 'fas fa-clock',
        link: 'admin-horarios'
      },
      {
        name:'Puntos',
        icon: 'fas fa-location-dot',
        link: 'admin-puntos'
      },
      {
        name:'Grilla',
        icon: 'fas fa-calendar',
        link: 'admin-grilla'
      },
      {
        name:'Listado',
        icon: 'fas fa-calendar',
        link: 'admin-listado'
      }

    ]
  }

  logout(){
    this.router.navigate(['/']);
  }
}
