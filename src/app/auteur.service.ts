import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  list:any;
  constructor(private http:HttpClient) { }

  getAllAuteur() {
    return this.http.get("http://localhost:8080/api/auteur")
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
