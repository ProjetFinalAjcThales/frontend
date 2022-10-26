import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterleslivresComponent } from './consulterleslivres/consulterleslivres.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { HomeComponent } from './home/home.component';
import { LivresbyauteurComponent } from './livresbyauteur/livresbyauteur.component';
import { LivresbygenreComponent } from './livresbygenre/livresbygenre.component';

const routes: Routes = [
  {path:'accueil', component:HomeComponent},
  {path:'', redirectTo:'/accueil', pathMatch:'full'},
  {path:'livres/genre', component:LivresbygenreComponent},
  {path:'livres/auteur', component:LivresbyauteurComponent},
  {path:'livres/detail-livre/:id', component: DetaillivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
