import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterleslivresComponent } from './consulterleslivres/consulterleslivres.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { ConsulterMonPanierComponent } from './consulter-mon-panier/consulter-mon-panier.component';
import { HomeComponent } from './home/home.component';
import { LivresbyauteurComponent } from './livresbyauteur/livresbyauteur.component';
import { LivresbygenreComponent } from './livresbygenre/livresbygenre.component';
import { RecapCommandeComponent } from './recap-commande/recap-commande.component';
import { ValidationCommandeComponent } from './validation-commande/validation-commande.component';
import { LivresbytitreComponent } from './livresbytitre/livresbytitre.component';

const routes: Routes = [
  {path:'accueil', component:HomeComponent},
  {path:'', redirectTo:'/accueil', pathMatch:'full'},
  {path:'livres/genre', component:LivresbygenreComponent},
  {path:'livres/auteur', component:LivresbyauteurComponent},
  {path:'livres/detail-livre/:id', component: DetaillivreComponent},
  {path:'monpanier', component:ConsulterMonPanierComponent},
  {path:'commande/recapitulatif', component:RecapCommandeComponent},
  {path:'commande/success', component:ValidationCommandeComponent},
  {path:'livres/titre', component:LivresbytitreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
