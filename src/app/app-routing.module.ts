import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterMonPanierComponent } from './consulter-mon-panier/consulter-mon-panier.component';
import { HomeComponent } from './home/home.component';
import { LivresbygenreComponent } from './livresbygenre/livresbygenre.component';
import { RecapCommandeComponent } from './recap-commande/recap-commande.component';
import { ValidationCommandeComponent } from './validation-commande/validation-commande.component';

const routes: Routes = [
  {path:'accueil', component:HomeComponent},
  {path:'', redirectTo:'/accueil', pathMatch:'full'},
  {path:'livres/genre', component:LivresbygenreComponent},
  {path:'monpanier', component:ConsulterMonPanierComponent},
  {path:'commande/recapitulatif', component:RecapCommandeComponent},
  {path:'commande/success', component:ValidationCommandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
