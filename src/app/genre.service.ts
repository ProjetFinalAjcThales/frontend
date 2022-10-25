import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  list: any;
 
  constructor(private http : HttpClient) { }

  getAllGenre() {
    return this.http.get("http://localhost:8080/api/genre")
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
