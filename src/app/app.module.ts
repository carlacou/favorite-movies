import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilmslistComponent } from './filmslist/filmslist.component';
import { FilmeCrudComponent } from './filme-crud/filme-crud.component';
import { CreateCadastoFilmeComponent } from './create-cadasto-filme/create-cadasto-filme.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilmeReadComponent } from './filme-read/filme-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FilmeUpdateComponent } from './filme-update/filme-update.component';
import { FilmeDeleteComponent } from './filme-delete/filme-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FooterComponent,
    NavComponent,
    FilmslistComponent,
    FilmeCrudComponent,
    CreateCadastoFilmeComponent,
    FilmeReadComponent,
    FilmeUpdateComponent,
    FilmeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
