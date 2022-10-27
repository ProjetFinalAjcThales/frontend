import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitreService {

  list:any;
  constructor(private http:HttpClient) { }

  getAllTitre() {
    return this.http.get("http://localhost:8080/api/livre/bytitre")
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
