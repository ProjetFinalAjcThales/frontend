import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livresbytitre',
  templateUrl: './livresbytitre.component.html',
  styleUrls: ['./livresbytitre.component.css']
})
export class LivresbytitreComponent implements OnInit {
  [x: string]: any;

  search: string;
  listLivres:Array<any>;
  
 // livreService: any;
  constructor(private route:ActivatedRoute,
    private livreService:LivreService,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      
      this.search = params['search'];
      // dans le subscribe pour que la méthode soit appelé à chaque changement de paramètre de recherche
      this.getLivreByTitre();
    });
  }

  getLivreByTitre() {

    this.livreService.getLivresByTitre(this.search).then(res => {
      this.listLivres = res;
    })

  } 

}
