export class Auteur {
    id:number;
    nom:string;
    prenom:string;
    img:string;

    getInfo() {
        this.nom+" "+this.prenom;
    }
}
