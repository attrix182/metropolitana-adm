import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateHomeComponent } from './private/pages/private-home/private-home.component';
import { PublicHomeComponent } from './public/pages/public-home/public-home.component';
import { PrivateVerTerritoriosComponent } from './private/pages/private-ver-territorios/private-ver-territorios.component';
import { PrivateAgregarTerritorioComponent } from './private/pages/private-agregar-territorio/private-agregar-territorio.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardTerritorioComponent } from './private/card-territorio/card-territorio.component';
import { SolicitarTerritorioComponent } from './public/pages/solicitar-territorio/solicitar-territorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearcherPipe } from './shared/pipes/searcher.pipe';
import { PrivateVerHermanosComponent } from './private/pages/private-ver-hermanos/private-ver-hermanos.component';
import { PrivateAgregarHermanosComponent } from './private/pages/private-agregar-hermanos/private-agregar-hermanos.component';
import { PublicMiTerritorioComponent } from './public/components/public-mi-territorio/public-mi-territorio.component';
import { PrivateDetalleTerritorioComponent } from './private/component/private-detalle-territorio/private-detalle-territorio.component';
import { SearcherAllFieldsPipe } from './shared/pipes/searcher-all-fields.pipe';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
