import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-detaillivre',
  templateUrl: './detaillivre.component.html',
  styleUrls: ['./detaillivre.component.css']
})
export class DetaillivreComponent implements OnInit {

  idLivre: number;
  livre = new Livre();
  
 // livreService: any;
  constructor(private route: ActivatedRoute,
    private livreService: LivreService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idLivre = params['id'];
      // dans le subscribe pour que la méthode soit appelé à chaque changement de paramètre de recherche
      this.getLivreByID();
    });
  }

  getLivreByID() {

    this.livreService.getLivreById(this.idLivre).then(livre => {
      this.livre = livre;

      alert(JSON.stringify(this.livre));
    })
  } 

}
