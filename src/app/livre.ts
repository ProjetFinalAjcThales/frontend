import { Auteur } from "./auteur";
import { Genre } from "./genre";

export class Livre {
    id:number;
    titre:string;
    description:string;
    image:string;
    dateSortie:number;
    prix:number;
    g:Genre;
    a:Auteur
}
