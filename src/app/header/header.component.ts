import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuteurService } from '../auteur.service';
import { CommandeLivre } from '../commande-livre';
import { GenreService } from '../genre.service';
import { LivreService } from '../livre.service';
import { LivresbygenreComponent } from '../livresbygenre/livresbygenre.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  listGenre: any;
  listAuteur:any;
  //input:string;
  recherche: string;
  panierSession: Array<CommandeLivre>;

  constructor(private genreService : GenreService,  private livreService: LivreService, private router: Router,
    private auteurService:AuteurService) { }

  ngOnInit(): void {
    this.genreService.getAllGenre().then(res => this.listGenre = res);
<<<<<<< HEAD
    this.auteurService.getAllAuteur().then(res => this.listAuteur = res);
  
  this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
  console.log(this.panierSession);
=======


    this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
>>>>>>> dev
  }


  rechercher(){
    if(!this.estNonVide(this.recherche)){
      return;
    }
    this.router.navigateByUrl("/livres/auteur?search="+this.recherche);
  }

  estNonVide(data: string){
    return data && data.trim().length > 0 ;
   }

  getInfoPanierSession() {
    if(JSON.parse(sessionStorage.getItem("panier")) != null) {
      this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
      this.panierSession.forEach(element => {
        console.log("**** " +element.livre.titre + " quantité : " + element.qte);

      });
     } else {
      console.log("le panier est vide");
     }

  }
}

