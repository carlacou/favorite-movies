import { Component, OnInit } from '@angular/core';
import { FilmeCadastro } from '../filme-cadastro.model';
import { FilmeCadastroService } from '../filme-cadastro.service';

@Component({
  selector: 'app-filme-read',
  templateUrl: './filme-read.component.html',
  styleUrls: ['./filme-read.component.css']
})
export class FilmeReadComponent implements OnInit {

  filmeCadastro: FilmeCadastro[] = [];
  displayedColumns = ['id', 'titulo', 'genero', 'action']

  constructor(private filmeCadastroService: FilmeCadastroService) { }

  ngOnInit(): void {
    this.filmeCadastroService.read().subscribe(filmeCadastro => {
      this.filmeCadastro = filmeCadastro
    })

  }

}
