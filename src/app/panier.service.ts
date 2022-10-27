import { Injectable } from '@angular/core';
import { CommandeLivre } from './commande-livre';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panierSession: Array<any>;
  prixTotal: number = 0;
  nbLivre: number;

  constructor() {}

  ajoutPanier(livrePanier: Livre) {
    // je récupère mon panier en session
    this.getPanierSession();

    // je crée une nouvelle ligne de commande (livre - quantité)
    let ligneCommande = new CommandeLivre(livrePanier, 1);

    // si mon panier en session est vide, je crée une 1ere ligne de commande
    if (this.panierSession.length <= 0) {
      this.panierSession.push(ligneCommande);
    } else {
      // renvoie true si le livre existe déjà dans le panier
      let isPresent = this.panierSession.some(function (el) {
        return el.livre.id == ligneCommande.livre.id;
      });

      // si livre pas présent : je l'ajoute au panier
      if (!isPresent) {
        this.panierSession.push(ligneCommande);
      } else {
        // sinon j'augmente la quantité de 1
        this.panierSession.forEach((element) => {
          if (element.livre.id === ligneCommande.livre.id) {
            element.qte = element.qte + 1;
          }
        });
      }
    }

    // ajout du nouveau panier en session
    sessionStorage.setItem('panier', JSON.stringify(this.panierSession));

    // pour le test uniquement, je récupère le panier et je l'affiche en console pour vérification
    this.getPanierSession();
    console.log(this.panierSession);
  }

  // Si panier session null = initialisation array vide, sinon intinialisation à l'objet en session
  getPanierSession() {
    if (JSON.parse(sessionStorage.getItem('panier')) != null) {
      this.panierSession = JSON.parse(sessionStorage.getItem('panier'));
    } else {
      this.panierSession = new Array<any>();
    }
  }

  // récpuérer le prix total d'un panier
  getPrixTotal() {
    this.getPanierSession();
    this.prixTotal = 0;
    this.panierSession.forEach((element) => {
      this.prixTotal = this.prixTotal + element.livre.prix * element.qte;
    });
    return this.prixTotal;
  }

  getNbLivre() {
    this.getPanierSession();
    this.nbLivre = 0;
    this.panierSession.forEach((element) => {
      this.nbLivre = this.nbLivre + element.qte;
    });
    return this.nbLivre;
  }

  // vider un panier
  viderPanier() {
    this.panierSession.length = 0;

    sessionStorage.setItem('panier', JSON.stringify(this.panierSession));
  }

  // Ajouter une quantité à un livre
  addQuantity(index: number) {
    this.getPanierSession();
    this.panierSession[index].qte = this.panierSession[index].qte + 1;

    sessionStorage.setItem('panier', JSON.stringify(this.panierSession));
  }

  deleteQuantity(index: number) {
    this.getPanierSession();

    if (this.panierSession[index].qte - 1 == 0) {
      this.removeElementFromPanierSession(this.panierSession[index]);
    } else {
      this.panierSession[index].qte = this.panierSession[index].qte - 1;
    }
    sessionStorage.setItem('panier', JSON.stringify(this.panierSession));
  }
  deleteElement(index: number) {
    this.removeElementFromPanierSession(this.panierSession[index]);
    sessionStorage.setItem('panier', JSON.stringify(this.panierSession));
  }

  removeElementFromPanierSession(element: any) {
    console.log(element);
    this.panierSession.forEach((value, index) => {
      console.log(index);
      if (value == element) this.panierSession.splice(index, 1);
    });
  }
}
