
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Setor } from '../model/setor';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlUsuario = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

 
getValidaUsuario(email:string,senha:string):Observable<number>{

  const url = `${apiUrlUsuario}/valida?email=${email}&senha=${senha}`;
  return this.http.get<number>(url).pipe(
    tap(valida => console.log(`validado com o email =${email}`)),
    catchError(this.handleError<number>(`getSetor id=${email}`))
  );
}





  getSetores (): Observable<Setor[]> {
    const url = `${apiUrlUsuario}/setores`;
    return this.http.get<Setor[]>(url)
      .pipe(
        tap(setores => console.log('leus os setores')),
        catchError(this.handleError('getSetor', []))
      );
  }

  getSetor(id: number): Observable<Setor> {
    const url = `${apiUrlUsuario}/setores/${id}`;
    return this.http.get<Setor>(url).pipe(
      tap(setor => console.log(`leu o usuario id=${id}`)),
      catchError(this.handleError<Setor>(`getSetor id=${id}`))
    );
  }


  getUsuarios (): Observable<Usuario[]> {
    const url = `${apiUrlUsuario}/usuarios`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        tap(usuarios => console.log('leus os usuarios')),
        catchError(this.handleError('getUsuarios', []))
      );
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${apiUrlUsuario}/usuarios/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(usuario => console.log(`leu o usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUsuario (usuario): Observable<Usuario> {
    const url = `${apiUrlUsuario}/usuarios`;
    return this.http.post<Usuario>(url, usuario, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((usuario: Usuario) => console.log(`adicionou o usuario com w/ id=${usuario.id}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  updateUsuario(id, usuario): Observable<Usuario> {
    const url = `${apiUrlUsuario}/usuarios/${id}`;
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(usuario => console.log(`atualizado o usuario com id=${id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }

  deleteUsuario (id): Observable<Usuario> {
    const url = `${apiUrlUsuario}/usuarios/${id}`;

    return this.http.delete<Usuario>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuario com id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}