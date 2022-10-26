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
    this.panierSession = JSON.parse(sessionStorage.getItem("panier"));

    this.prixTotal = this.panierService.getPrixTotal()
  }

  viderPanier() {
    this.panierService.viderPanier();

    this.ngOnInit();
  }

}
