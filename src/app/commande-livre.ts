import { Commande } from "./commande";
import { Livre } from "./livre";

export class CommandeLivre {
   // id: number;
/*     commande: Commande; */
    livre: Livre;
    quantite: number;

    constructor(livre: Livre, quantite: number) {
        this.livre = livre;
        this.quantite = quantite;
    }

    getInfo() {
        return this.livre.titre + " - quantité : " + this.quantite;
    }
}
