import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterleslivresComponent } from './consulterleslivres/consulterleslivres.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: 'livre/all', component: ConsulterleslivresComponent }
  {path:'accueil', component:HomeComponent},
{path:'', redirectTo:'/accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
