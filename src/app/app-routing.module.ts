import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateAgregarHermanosComponent } from './private/pages/private-agregar-hermanos/private-agregar-hermanos.component';
import { PrivateAgregarTerritorioComponent } from './private/pages/private-agregar-territorio/private-agregar-territorio.component';
import { PrivateHomeComponent } from './private/pages/private-home/private-home.component';
import { PrivateVerHermanosComponent } from './private/pages/private-ver-hermanos/private-ver-hermanos.component';
import { PrivateVerTerritoriosComponent } from './private/pages/private-ver-territorios/private-ver-territorios.component';
import { PublicHomeComponent } from './public/pages/public-home/public-home.component';
import { SolicitarTerritorioComponent } from './public/pages/solicitar-territorio/solicitar-territorio.component';

const routes: Routes = [
  { path: '', component: PublicHomeComponent },
  { path: 'admin', component: PrivateHomeComponent },
  { path: 'admin/ver-territorios', component: PrivateVerTerritoriosComponent },
  {
    path: 'admin/agregar-territorio',
    component: PrivateAgregarTerritorioComponent,
  },
  {
    path: 'solicitar-territorio/fijos',
    component: SolicitarTerritorioComponent,
  },

  {
    path: 'solicitar-territorio/celulares',
    component: SolicitarTerritorioComponent,
  },
  
  { path: 'admin/ver-hermanos', component: PrivateVerHermanosComponent },
  {
    path: 'admin/agregar-hermanos',
    component: PrivateAgregarHermanosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
