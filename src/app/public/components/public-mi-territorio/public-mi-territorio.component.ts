import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-public-mi-territorio',
  templateUrl: './public-mi-territorio.component.html',
  styleUrls: ['./public-mi-territorio.component.scss']
})
export class PublicMiTerritorioComponent implements OnInit {
  @Input() territorio: any;

  constructor(private storageSVC: StorageService, private alertSVC: AlertService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.territorio);

    if (!this.territorio) {
      localStorage.removeItem('solicitud');
      this.router.navigate(['/']);
    }
  }

  marcarTelefono(telefono: any) {
    let card = document.querySelector(`#telefono-${telefono}`) as HTMLElement;
    card.classList.toggle('active');
  }

  async devolverTerritorio() {
    let confirm: any = false;
    confirm = await this.alertSVC.confirmAlert(
      `¿Desea devolver el territorio ${this.territorio.id}?`,
      'Si',
      'No',
      'Devuelto correctamente'
    );
    if (confirm) {
      this.storageSVC.Update(this.territorio.id, `territorios-${this.territorio.tipo}`, {
        estado: 'disponible',
        devolucion: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
      });

      localStorage.removeItem('solicitud');
      this.router.navigate(['/']);
    }
  }
}
