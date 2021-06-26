import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeCadastro } from '../filme-cadastro.model';
import { FilmeCadastroService } from '../filme-cadastro.service';



@Component({
  selector: 'app-filme-update',
  templateUrl: './filme-update.component.html',
  styleUrls: ['./filme-update.component.css']
})
export class FilmeUpdateComponent implements OnInit {

  filmeCadastro!: FilmeCadastro;

  constructor(private filmeCadastroService: FilmeCadastroService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.filmeCadastroService.readById(id).subscribe(filmeCadastro => {
      this.filmeCadastro = this.filmeCadastro
    }); 
  }

  updateCadastro(): void {
    this.filmeCadastroService.update(this.filmeCadastro).subscribe(() => {

      this.filmeCadastroService.showMessage('Filme cadastrado!')

      this.router.navigate(['/films'])
    });

  }

  cancel(): void {
    this.router.navigate(['/films'])
  }

}
