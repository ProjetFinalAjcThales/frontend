import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-consulterleslivres',
  templateUrl: './consulterleslivres.component.html',
  styleUrls: ['./consulterleslivres.component.css']
})
export class ConsulterleslivresComponent implements OnInit {

  Mylist: any;
  constructor(private srv:LivreService) { }


 
  ngOnInit(): void {
    this.srv.getlist().then(x=> this.Mylist = x);
    
  }

}
