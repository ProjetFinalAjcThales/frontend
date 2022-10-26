import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuteurService } from '../auteur.service';
import { GenreService } from '../genre.service';
import { LivreService } from '../livre.service';
import { LivresbygenreComponent } from '../livresbygenre/livresbygenre.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listGenre: any;
  listAuteur:any;
  constructor(private genreService : GenreService,  private livreService: LivreService,
    private auteurService:AuteurService) { }

  ngOnInit(): void {
    this.genreService.getAllGenre().then(res => this.listGenre = res);
    this.auteurService.getAllAuteur().then(res => this.listAuteur = res);
  }
}
