import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css'],
})
export class ProfilUtilisateurComponent implements OnInit {
  clientSession: any;
  client: any = { nom: '', prenom: '', adresse: '', codePostal: '', ville: '' };
  utilisateurId: number;
  message: string;
  error: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.clientSession = JSON.parse(sessionStorage.getItem('client'));
    console.log(this.clientSession);
    this.utilisateurId = this.clientSession.utilisateur.id;
  }

  modifierProfil() {
    this.clientSession.utilisateur = {};
    this.clientSession.utilisateur.id = this.utilisateurId;

    const body = this.clientSession;

    this.http
      .put('http://localhost:8080/client', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          this.message =
            'Les informations de votre profil ont bien été modifiées.';
          this.clientSession = response;
          sessionStorage.setItem('client', JSON.stringify(this.clientSession));
          this.ngOnInit();
        },
        (err) => {
          this.error =
            "Une erreur s'est produite durant la modification du profil utilisateur.";
        }
      );
  }
}
