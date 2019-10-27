import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Setor } from '../model/setor';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlProduto = 'http://localhost:8083/api/';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  constructor(private http: HttpClient) { }

 
  getCategorias (): Observable<Categoria[]> {
    const url = `${apiUrlProduto}/categorias`;
    return this.http.get<Categoria[]>(url)
      .pipe(
        tap(categorias => console.log('leus os categorias')),
        catchError(this.handleError('getCategorias', []))
      );
  }

  getCategoria(id: number): Observable<Categoria> {
    const url = `${apiUrlProduto}/categorias/${id}`;
    return this.http.get<Categoria>(url).pipe(
      tap(categorias => console.log(`leu a categoria id=${id}`)),
      catchError(this.handleError<Setor>(`getCategoria id=${id}`))
    );
  }


  getProdutos (): Observable<Produto[]> {
    const url = `${apiUrlProduto}/produtos`;
    return this.http.get<Produto[]>(url)
      .pipe(
        tap(produtos => console.log('leus os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getProduto(id: number): Observable<Produto> {
    const url = `${apiUrlProduto}/produtos/${id}`;
    return this.http.get<Produto>(url).pipe(
      tap(produto => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Produto>(`getProduto id=${id}`))
    );
  }




  addProduto (produto): Observable<Produto> {
    const url = `${apiUrlProduto}/produtos`;
    return this.http.post<Produto>(url, produto, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((produto: Produto) => console.log(`adicionou o produto com w/ id=${produto.id}`)),
      catchError(this.handleError<Produto>('addProduto'))
    );
  }

  updateProduto(id, produto): Observable<Produto> {
    const url = `${apiUrlProduto}/produtos/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(produto => console.log(`atualizado o produto com id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  deleteProduto (id): Observable<Produto> {
    const url = `${apiUrlProduto}/produtos/${id}`;

    return this.http.delete<Produto>(url, httpOptions).pipe(
      tap(produto => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Produto>('deleteProduto'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
}
}
