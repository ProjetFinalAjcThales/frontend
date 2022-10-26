import { Component, OnInit } from '@angular/core';
import { LivreService } from '../livre.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-consulter-mon-panier',
  templateUrl: './consulter-mon-panier.component.html',
  styleUrls: ['./consulter-mon-panier.component.css']
})
export class ConsulterMonPanierComponent implements OnInit {

  panierSession: Array<any>;
  prixTotal: number = 0;

  constructor(private panierService: PanierService, private livreService: LivreService) { }

  ngOnInit(): void {
    this.getPanierSession();
   

    this.prixTotal = this.panierService.getPrixTotal()
    console.log(this.panierSession);
  }

  viderPanier() {
    this.panierService.viderPanier();

    this.ngOnInit();
  }

  addQuantity(index: number) {
    this.panierService.addQuantity(index);
    this.ngOnInit();

  }

  deleteQuantity(index: number) {
    this.panierService.deleteQuantity(index);
    this.ngOnInit();
  }

  deleteLigne(index:number) {
    this.panierService.deleteElement(index);
    this.ngOnInit();
  }

  // Si panier session null = initialisation array vide, sinon intinialisation à l'objet en session
  getPanierSession() {
    if(JSON.parse(sessionStorage.getItem("panier")) != null) {
      this.panierSession = JSON.parse(sessionStorage.getItem("panier"));
    } else {
      this.panierSession= new Array<any>();
    }
   }

}
