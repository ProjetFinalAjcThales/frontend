import { Commande } from "./commande";
import { Utilisateur } from "./utilisateur";

export class Client {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    codePostal: string;
    ville: string;
    createdAt: Date;
    utilisateur: Utilisateur;
    commande: Array<Commande>;
}
