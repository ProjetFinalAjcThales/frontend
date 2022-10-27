import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionutilisateur',
  templateUrl: './inscriptionutilisateur.component.html',
  styleUrls: ['./inscriptionutilisateur.component.css'],
})
export class InscriptionutilisateurComponent implements OnInit {
  client: any = { nom: '', prenom: '', mail: '', mdp: '' };
  clientSession: any;
  message: string;
  error: string;
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.clientSession = JSON.parse(sessionStorage.getItem('client'));
  }

  inscription() {
    const body = this.client;

    this.http
      .post('http://localhost:8080/auth/register', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          this.error = null;
          this.message =
            'Inscription réussie. Redirection vers la page de connexion en cours.';
          this.redirect();
          // redirection vers connexion
        },
        (err) => {
          this.message = null;
          if (err.message.includes('401'))
            this.error =
              "Une erreur s'est produite durant l'inscription. Veuillez vérifier que tous les champs soient correctement remplis.";
          else if (err.message.includes('400')) {
            this.error = 'Ce mail existe déjà.';
          } else {
            this.error = "Une erreur s'est produite";
          }
        }
      );
  }

  redirect() {
    setTimeout(() => {
      this.route.navigate(['/auth/connexion']);
    }, 3000);
  }
}
