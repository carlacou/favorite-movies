import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmslistComponent } from './filmslist/filmslist.component';
import { FilmeCrudComponent } from './filme-crud/filme-crud.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CreateCadastoFilmeComponent } from './create-cadasto-filme/create-cadasto-filme.component';
import { FilmeReadComponent } from './filme-read/filme-read.component';
import { FilmeUpdateComponent } from './filme-update/filme-update.component';
import { FilmeDeleteComponent } from './filme-delete/filme-delete.component';

const routes: Routes = [

  {
    path: '',
    component: FilmslistComponent
  },
  {
    path: 'films',
    component: FilmeCrudComponent
  },
  {
    path: 'create-cadasto-filme',
    component: CreateCadastoFilmeComponent
  },
  {
    path: 'filme/update/:id',
    component: FilmeUpdateComponent
  },
  {
    path: 'filme/delete/:id',
    component: FilmeDeleteComponent
  },
  {
    path: '',
    component: FilmeReadComponent
  },
  {
    path: '',
    component: NavComponent
  },
  
  {
    path: '',
    component: FilmesComponent
  },
  {
    path: '',
    component: FooterComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
