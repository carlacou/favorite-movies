import { Component, OnInit } from '@angular/core';
//import { HeaderService } from '.header.service';

@Component({
  selector: 'app-filmslist',
  templateUrl: './filmslist.component.html',
  styleUrls: ['./filmslist.component.css']
})
export class FilmslistComponent implements OnInit {

  constructor(/*private headerService: HeaderService*/) {
    /*headerService.headerData = {
      title: 'filmes',
      icon: 'add',
      routeUrl: ''
    }*/
   }

  ngOnInit(): void {
  }

}
