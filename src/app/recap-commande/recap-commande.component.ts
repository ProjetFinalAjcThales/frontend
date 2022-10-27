import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-recap-commande',
  templateUrl: './recap-commande.component.html',
  styleUrls: ['./recap-commande.component.css'],
})
export class RecapCommandeComponent implements OnInit {
  clientLivraison: any;
  panierSession: Array<any>;
  prixTotal: number = 0;
  nbLivre: number = 0;
  message: string;

  constructor(
    private panierService: PanierService,
    private commandeService: CommandeService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPanierSession();
    this.clientLivraison = JSON.parse(sessionStorage.getItem('client'));
    this.prixTotal = this.panierService.getPrixTotal();
    this.nbLivre = this.panierService.getNbLivre();
  }

  // Si panier session null = initialisation array vide, sinon intinialisation à l'objet en session
  getPanierSession() {
    if (JSON.parse(sessionStorage.getItem('panier')) != null) {
      this.panierSession = JSON.parse(sessionStorage.getItem('panier'));
    } else {
      this.panierSession = new Array<any>();
    }
  }

  validerCommande() {
    let commande = {
      client: { id: 1 },
      livres: this.panierSession,
    };

    const body = JSON.stringify(commande);
    this.http
      .post('http://localhost:8080/commande', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          this.message = 'commande créée';
          this.panierService.viderPanier();

          sessionStorage.setItem(
            'clientLivraison',
            JSON.stringify(this.clientLivraison)
          );

          this.router.navigate(['/commande/success']);

          console.log(response);
        },
        (err) => {
          this.message = 'Erreur durant la création de la commande';
          console.log(err);
        },
        () => {
          console.log('******* complete ********');
        }
      );
  }
}
