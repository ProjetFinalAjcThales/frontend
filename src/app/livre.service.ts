import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  list:any;
  livre:any;
  input:string;
  constructor(private http:HttpClient) { }


  getlist()
  {//dans cette methode on dit globalement on retourne ma list grace à mon appel asynchrone
   return this.http.get("http://localhost:8080/api/livre").toPromise().then(res => {
      this.list =res;
     return this.list;
      // code here is executed on success
    })
   .catch();
  }

  
  getLivresByGenre(genre : string) {
    return this.http.get("http://localhost:8080/api/livre/bygenre?search="+genre)
    .toPromise()
    .then(res => {
      this.list = res;
      return this.list;
    })
    .catch(err => {
      console.log(err);
    })
  }


  getLivresByAuteur(auteur : string) {
    return this.http.get("http://localhost:8080/api/livre/byauteur?search="+auteur)
    .toPromise()
    .then(res => {
      this.list = res;
      console.log("**** complete *****");
      console.log(res);
      return this.list;
    })
    .catch(err => {
      console.log(err);
    })
  }

  
  getLivreById(id : number)  {
    return this.http.get("http://localhost:8080/api/livre/"+id)
    .toPromise()
    .then(res => {
      this.livre = res;
      return this.livre;
    })
    .catch(err => {
      console.log(err);
    })
  }

}
