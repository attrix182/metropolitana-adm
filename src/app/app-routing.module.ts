import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { PrivateAgregarHermanosComponent } from './privateOld/pages/private-agregar-hermanos/private-agregar-hermanos.component';
import { PrivateAgregarTerritorioComponent } from './privateOld/pages/private-agregar-territorio/private-agregar-territorio.component';
import { PrivateHomeComponent } from './privateOld/pages/private-home/private-home.component';
import { PrivateVerHermanosComponent } from './privateOld/pages/private-ver-hermanos/private-ver-hermanos.component';
import { PrivateVerTerritoriosComponent } from './privateOld/pages/private-ver-territorios/private-ver-territorios.component';
import { PublicHomeComponent } from './publicOld/pages/public-home/public-home.component';
import { SolicitarTerritorioComponent } from './publicOld/pages/solicitar-territorio/solicitar-territorio.component';

const routes: Routes = [
  { path: '',  loadChildren: () => import('../app/pages/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
