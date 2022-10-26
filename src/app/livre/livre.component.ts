import { Component, Input, OnInit } from '@angular/core';
import { CommandeLivre } from '../commande-livre';
import { Livre } from '../livre';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre: Livre;

  panierSession: Array<any>;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.getPanierSession();
  }

  ajoutPanier(livrePanier: Livre) {
    this.panierService.ajoutPanier(livrePanier);
  }


  getPanierSession() {
    this.panierService.getPanierSession();
  }

}
