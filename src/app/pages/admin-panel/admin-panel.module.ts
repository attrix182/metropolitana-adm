import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './sections/admin-dashboard/admin-dashboard.component';
import { AdminHermanosComponent } from './sections/admin-hermanos/admin-hermanos.component';



@NgModule({
  declarations: [AdminPanelComponent, AdminSidebarComponent, AdminNavbarComponent, AdminDashboardComponent, AdminHermanosComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
