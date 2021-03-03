import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdresseComponent } from './adresse/adresse.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireSaisieClientComponent } from './formulaire-saisie-client/formulaire-saisie-client.component';
import { RecapitulatifSaisieClientComponent } from './recapitulatif-saisie-client/recapitulatif-saisie-client.component';
import { TelephonePipe } from './telephone.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdresseComponent,
    FooterComponent,
    FormulaireSaisieClientComponent,
    RecapitulatifSaisieClientComponent,
    TelephonePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
