import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ConsulterleslivresComponent } from './consulterleslivres/consulterleslivres.component';
import { FormsModule } from '@angular/forms';
import { LivresbygenreComponent } from './livresbygenre/livresbygenre.component';
import { LivresbyauteurComponent } from './livresbyauteur/livresbyauteur.component';
import { LivreComponent } from './livre/livre.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { ConsulterMonPanierComponent } from './consulter-mon-panier/consulter-mon-panier.component';
import { RecapCommandeComponent } from './recap-commande/recap-commande.component';
import { ValidationCommandeComponent } from './validation-commande/validation-commande.component';
import { LivresbytitreComponent } from './livresbytitre/livresbytitre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConsulterleslivresComponent,
    LivresbygenreComponent,
    LivresbyauteurComponent,
    LivreComponent,
      DetaillivreComponent,
    ConsulterMonPanierComponent,
    RecapCommandeComponent,
    ValidationCommandeComponent,
    LivresbytitreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
