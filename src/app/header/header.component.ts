import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auteur } from '../auteur';
import { AuteurService } from '../auteur.service';
import { CommandeLivre } from '../commande-livre';
import { GenreService } from '../genre.service';
import { LivreService } from '../livre.service';
import { LivresbygenreComponent } from '../livresbygenre/livresbygenre.component';
import { PanierService } from '../panier.service';
import { Utilisateur } from '../utilisateur';
import { TitreService } from '../titre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listGenre: any;
  listAuteur: any;
  listLivreByTitre: any;
  //input:string;
  recherche: string;
  titre: string;
  panierSession: Array<CommandeLivre>;

  clientSession: Utilisateur = new Utilisateur();

  constructor(
    private genreService: GenreService,
    private livreService: LivreService,
    private router: Router,
    private auteurService: AuteurService,
    private panierService: PanierService,
    private titreService: TitreService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.genreService.getAllGenre().then((res) => (this.listGenre = res));
    this.auteurService.getAllAuteur().then((res) => (this.listAuteur = res));
    this.titreService
      .getAllTitre()
      .then((res) => (this.listLivreByTitre = res));

    this.panierSession = JSON.parse(sessionStorage.getItem('panier'));
    console.log(this.panierSession);

    this.clientSession = JSON.parse(sessionStorage.getItem('client'));

    //console.log(this.clientSession);
  }

  rechercher() {
    if (
      !this.estNonVide(this.recherche) ||
      this.estNonVide(this.recherche) === undefined
    ) {
      this.router.navigateByUrl('/livre/bytitre?search=' + this.titre);
    }
    this.router.navigateByUrl('/livres/auteur?search=' + this.recherche);
  }

  estNonVide(data: string) {
    return data && data.trim().length > 0;
  }

  rechercherTitreAuteur() {}

  getInfoPanierSession() {
    if (JSON.parse(sessionStorage.getItem('panier')) != null) {
      this.panierSession = JSON.parse(sessionStorage.getItem('panier'));
      this.panierSession.forEach((element) => {
        console.log(
          '**** ' + element.livre.titre + ' quantité : ' + element.qte
        );
      });
    } else {
      console.log('le panier est vide');
    }
  }

  deconnect() {
    this.clientSession = null;
    sessionStorage.setItem('client', JSON.stringify(this.clientSession));
    this.ngOnInit();
  }
}
