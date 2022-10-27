import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  message: string;
  utilisateur: any = { mail: '', mdp: '' };

  utilisateurConnecte: Utilisateur = new Utilisateur();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const body = JSON.stringify(this.utilisateur);
    if (this.utilisateur.mail == '' && this.utilisateur.mdp == '') {
      return (this.message =
        'Veuillez vérifier que tous les champs soient correctement remplis.');
    }

    return this.http
      .get<Utilisateur>(
        'http://localhost:8080/auth/connexion/' +
          this.utilisateur.mail +
          '/' +
          this.utilisateur.mdp
      )
      .subscribe(
        (response) => {
          this.utilisateurConnecte = response;
          sessionStorage.setItem(
            'client',
            JSON.stringify(this.utilisateurConnecte)
          );
          console.log(this.utilisateurConnecte);
          this.message = 'Succès !';
          this.router.navigate(['/accueil']);
          this.message = 'Succès !';
        },
        (err) => {
          console.log(err);
          if (err.message.includes('401'))
            this.message =
              "Une erreur s'est produite. Le mot de passe ne correspond pas à celui en base de données.";
          else if (err.message.includes('400')) {
            this.message = "Aucun mail correspondant n'a été trouvé.";
          } else {
            this.message = "Une erreur s'est produite. ";
          }
        }
      );
  }
}
