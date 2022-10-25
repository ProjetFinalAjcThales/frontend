import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private genreService : GenreService,  private livreService: LivreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenre().then(res => this.listGenre = res);
  }
}
