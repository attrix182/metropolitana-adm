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
import { AdminHorariosComponent } from './sections/admin-horarios/admin-horarios.component';
import { AdminPuntosComponent } from './sections/admin-puntos/admin-puntos.component';
import { AdminGrillaComponent } from './sections/admin-grilla/admin-grilla.component';
import { AdminPuntosAltaComponent } from './sections/admin-puntos/admin-puntos-alta/admin-puntos-alta.component';
import { AdminPuntosListadoComponent } from './sections/admin-puntos/admin-puntos-listado/admin-puntos-listado.component';
import { AdminHermanosModalDisponibilidadComponent } from './sections/admin-hermanos/admin-hermanos-modal-disponibilidad/admin-hermanos-modal-disponibilidad.component';
import { AdminHorariosAltaComponent } from './sections/admin-horarios/admin-horarios-alta/admin-horarios-alta.component';
import { AdminHorariosListadoComponent } from './sections/admin-horarios/admin-horarios-listado/admin-horarios-listado.component';
import { AdminGrillaAltaComponent } from './sections/admin-grilla/admin-grilla-alta/admin-grilla-alta.component';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminGrillaAltaConfirmacionComponent } from './sections/admin-grilla/admin-grilla-alta/admin-grilla-alta-confirmacion/admin-grilla-alta-confirmacion.component';
import { AdminGrillaListadoComponent } from './sections/admin-grilla/admin-grilla-listado/admin-grilla-listado.component';
import { AdminGrillaCalendarioComponent } from './sections/admin-grilla/admin-grilla-calendario/admin-grilla-calendario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { AdminListadoComponent } from './sections/admin-listado/admin-listado.component';
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.dots
};

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminHermanosComponent,
    AdminHermanosAltaComponent,
    AdminDisponibilidadComponent,
    AdminHermanosListadoComponent,
    AdminHorariosComponent,
    AdminPuntosComponent,
    AdminGrillaComponent,
    AdminPuntosAltaComponent,
    AdminPuntosListadoComponent,
    AdminHermanosModalDisponibilidadComponent,
    AdminHorariosAltaComponent,
    AdminHorariosListadoComponent,
    AdminGrillaAltaComponent,
    AdminGrillaAltaConfirmacionComponent,
    AdminGrillaListadoComponent,
    AdminGrillaCalendarioComponent,
    AdminListadoComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgWizardModule.forRoot(ngWizardConfig),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ]
})
export class AdminPanelModule {}
