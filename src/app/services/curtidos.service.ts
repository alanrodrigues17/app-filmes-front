import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurtidosService {

  //TODO: Corrigir para um environment 
  private readonly SERVER_URL = "/filmes"

  constructor(
    private http: HttpClient
  ) { }

  get allFilmesCurtidos(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL).pipe(
      tap(res => res),

    )
  }

  saveFilme(payload: { idFilme: number, curtido: boolean, img: string, titulo: string }): Observable<any> {
    return this.http.post(this.SERVER_URL, payload).pipe(
      map((data) => {
        return data
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    )
  }

  getFilmePorId(idFilme: number): Observable<any> {
    const url = `${this.SERVER_URL}/id/${idFilme}`;
    return this.http.get<any>(url).pipe(
      tap(res => res),
      catchError((err) => {
        return throwError(() => err);
      })

    )
  }

  updateFilmePorId(idFilme: number, novoFilme: any): Observable<any> {
    const url = `${this.SERVER_URL}/atualizar/${idFilme}`;
    return this.http.patch<any>(url, novoFilme);
  }
}
