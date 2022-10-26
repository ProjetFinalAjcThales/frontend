import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livresbygenre',
  templateUrl: './livresbygenre.component.html',
  styleUrls: ['./livresbygenre.component.css']
})
export class LivresbygenreComponent implements OnInit {

  search: string;
  listLivres:Array<any>;

  constructor(
    private route: ActivatedRoute, 
    private livreService: LivreService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
      // dans le subscribe pour que la méthode soit appelé à chaque changement de paramètre de recherche
      this.getLivreByGenre();
    });

  }

   getLivreByGenre() {
    this.livreService.getLivresByGenre(this.search).then(res => {
      this.listLivres = res;
    });
  } 





}
