import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  panierSession: Array<CommandeLivre>;

  constructor(private genreService : GenreService,  private livreService: LivreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenre().then(res => this.listGenre = res);


    this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
  }

  getInfoPanierSession() {
    if(JSON.parse(sessionStorage.getItem("panier")) != null) {
      this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
      this.panierSession.forEach(element => {
        console.log("**** " +element.livre.titre + " quantité : " + element.quantite);

      });
     } else {
      console.log("le panier est vide");
     }

  }
}
