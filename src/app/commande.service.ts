import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  message: string;
  commande: any;

  constructor(private http: HttpClient) { }

  validerCommande(commande: any) {
    const body = JSON.stringify(commande);
    this.http.post("http://localhost:8080/commande", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      (response) => {
        this.message = "commande créée";
        console.log(response);
      },
      (err) => {
        this.message="Erreur durant la création de la commande";
        console.log(err);
      },
      () => {
        console.log("******* complete ********");
      }
    )
  }
}
