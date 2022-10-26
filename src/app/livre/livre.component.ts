import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeLivre } from '../commande-livre';
import { Livre } from '../livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre: Livre;

  panierSession: Array<any>;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.getPanierSession();
  }


  ajoutPanier(livrePanier: Livre) {
    // je récupère mon panier en session
    this.getPanierSession();
    
    // je crée une nouvelle ligne de commande (livre - quantité)
    let ligneCommande = new CommandeLivre(livrePanier, 1);

    // si mon panier en session est vide, je crée une 1ere ligne de commande
    if(this.panierSession.length <= 0 ) {
      this.panierSession.push(ligneCommande);
     } else {

      // renvoie true si le livre existe déjà dans le panier 
      let isPresent = this.panierSession.some(function(el) { return el.livre.id == ligneCommande.livre.id});
  
      // si livre pas présent : je l'ajoute au panier
      if (!isPresent) {
        this.panierSession.push(ligneCommande);
      } else {
        // sinon j'augmente la quantité de 1
        this.panierSession.forEach(element => {
          if(element.livre.id === ligneCommande.livre .id) {
            element.quantite = element.quantite + 1;
          } 
        })
      }
 
    }

    // ajout du nouveau panier en session
    sessionStorage.setItem("panier", JSON.stringify(this.panierSession));

    // pour le test uniquement, je récupère le panier et je l'affiche en console pour vérification
    this.getPanierSession();
    console.log(this.panierSession);
  }


  // Si panier session null = initialisation array vide, sinon intinialisation à l'objet en session
  getPanierSession() {
    if(JSON.parse(sessionStorage.getItem("panier")) != null) {
     this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
    } else {
     this.panierSession= new Array<any>();
    }
  }

  accederAuLivre(){

this.router.navigateByUrl("livres/detail-livre/"+this.livre.id);    
   }

}
