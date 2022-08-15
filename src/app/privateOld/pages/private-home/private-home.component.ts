import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss'],
})
export class PrivateHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTerritorios() {
    this.router.navigateByUrl('/admin/ver-territorios');
  }

  goToAgregarTerrritorio() {
    this.router.navigateByUrl('/admin/agregar-territorio');
  }

  goToVerHermanos() {
    this.router.navigateByUrl('/admin/ver-hermanos');
  }

  goToAgregarHermanos() {
    this.router.navigateByUrl('/admin/agregar-hermanos');
  }
}
