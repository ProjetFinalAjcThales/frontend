import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  list:any;
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
}
