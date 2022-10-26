import { Auteur } from "./auteur";
import { CommandeLivre } from "./commande-livre";
import { Genre } from "./genre";

export class Livre {
    id:number;
    titre:string;
    description:string;
    image:string;
    dateSortie:number;
    prix:number;
    genre:Genre;
    auteur:Auteur;
    quantite: number;
    commandes: Array<CommandeLivre>;
}
