import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateHomeComponent } from './privateOld/pages/private-home/private-home.component';
import { PublicHomeComponent } from './publicOld/pages/public-home/public-home.component';
import { PrivateVerTerritoriosComponent } from './privateOld/pages/private-ver-territorios/private-ver-territorios.component';
import { PrivateAgregarTerritorioComponent } from './privateOld/pages/private-agregar-territorio/private-agregar-territorio.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardTerritorioComponent } from './privateOld/card-territorio/card-territorio.component';
import { SolicitarTerritorioComponent } from './publicOld/pages/solicitar-territorio/solicitar-territorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearcherPipe } from './shared/pipes/searcher.pipe';
import { PrivateVerHermanosComponent } from './privateOld/pages/private-ver-hermanos/private-ver-hermanos.component';
import { PrivateAgregarHermanosComponent } from './privateOld/pages/private-agregar-hermanos/private-agregar-hermanos.component';
import { PublicMiTerritorioComponent } from './publicOld/components/public-mi-territorio/public-mi-territorio.component';
import { PrivateDetalleTerritorioComponent } from './privateOld/component/private-detalle-territorio/private-detalle-territorio.component';
import { SearcherAllFieldsPipe } from './shared/pipes/searcher-all-fields.pipe';
import { AdminPanelModule } from './pages/admin-panel/admin-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    PrivateHomeComponent,
    PublicHomeComponent,
    PrivateVerTerritoriosComponent,
    PrivateAgregarTerritorioComponent,
    NavbarComponent,
    CardTerritorioComponent,
    SolicitarTerritorioComponent,
    SearcherPipe,
    PrivateVerHermanosComponent,
    PrivateAgregarHermanosComponent,
    PublicMiTerritorioComponent,
    PrivateDetalleTerritorioComponent,
    SearcherAllFieldsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminPanelModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
