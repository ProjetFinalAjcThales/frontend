import { Commande } from "./commande";
import { Livre } from "./livre";

export class CommandeLivre {
   // id: number;
/*     commande: Commande; */
    livre: Livre;
    qte: number;

    constructor(livre: Livre, qte: number) {
        this.livre = livre;
        this.qte = qte;
    }

    getInfo() {
        return this.livre.titre + " - quantité : " + this.qte;
    }
}
