import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeCadastro } from '../filme-cadastro.model';
import { FilmeCadastroService } from '../filme-cadastro.service';

@Component({
  selector: 'app-filme-delete',
  templateUrl: './filme-delete.component.html',
  styleUrls: ['./filme-delete.component.css']
})
export class FilmeDeleteComponent implements OnInit {

  filmeCadastro!: FilmeCadastro; 

  constructor(private filmeCadastroService: FilmeCadastroService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.filmeCadastroService.readById(id).subscribe(filmeCadastro => {
      this.filmeCadastro = filmeCadastro
    })
  }

  deleteCadastro(): void {
    /*this.filmeCadastroService.delete(this.filmeCadastro.id).subscribe(() =>{
      this.filmeCadastroService.showMessage('Filme Excluído com sucesso!')
      this.router.navigate(['/films'])
    })*/
  }

  cancel(): void {
    this.router.navigate(['/films'])
  }
}
