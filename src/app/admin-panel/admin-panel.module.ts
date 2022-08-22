import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './sections/admin-dashboard/admin-dashboard.component';
import { AdminHermanosComponent } from './sections/admin-hermanos/admin-hermanos.component';
import { AdminHermanosAltaComponent } from './sections/admin-hermanos/admin-hermanos-alta/admin-hermanos-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDisponibilidadComponent } from './sections/admin-hermanos/admin-hermanos-alta/components/admin-disponibilidad/admin-disponibilidad.component';
import { AdminHermanosListadoComponent } from './sections/admin-hermanos/admin-hermanos-listado/admin-hermanos-listado.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminHermanosComponent,
    AdminHermanosAltaComponent,
    AdminDisponibilidadComponent,
    AdminHermanosListadoComponent
  ],
  imports: [CommonModule, AdminPanelRoutingModule, FormsModule, ReactiveFormsModule]
})
export class AdminPanelModule {}
