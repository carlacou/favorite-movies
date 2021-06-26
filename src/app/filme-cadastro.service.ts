import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FilmeCadastro } from './filme-cadastro.model';


@Injectable({
  providedIn: 'root'
})
export class FilmeCadastroService {

  baseURL = "http://localhost:3001/filmes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-sucess']
    });
  }

  create(FilmeCadastro: FilmeCadastro): Observable<FilmeCadastro> {
    return this.http.post<FilmeCadastro>(this.baseURL, FilmeCadastro)
  }

  read(): Observable<FilmeCadastro[]> {
    return this.http.get<FilmeCadastro[]>(this.baseURL)
  }

  readById(id: string | null): Observable<FilmeCadastro> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<FilmeCadastro>(url)
  }

  update(filmeCadastro: FilmeCadastro): Observable<FilmeCadastro> {
    const url = `${this.baseURL}/${filmeCadastro.id}`
    return this.http.put<FilmeCadastro>(url, filmeCadastro)
  }

  delete(id: string): Observable<FilmeCadastro> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<FilmeCadastro>(url);
  }
}
