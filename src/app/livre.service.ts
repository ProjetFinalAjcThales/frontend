import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  list: any;
  constructor(private http:HttpClient) { }

  
  getLivresByGenre(genre : string) {
    return this.http.get("http://localhost:8080/api/livre/bygenre?search="+genre)
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
}
