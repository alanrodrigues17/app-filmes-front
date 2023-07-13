import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly SERVER_URL = "https://api.themoviedb.org/3/discover/movie";

  constructor(
    private http: HttpClient
  ) { }

  get getFilmes(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL).pipe(
      tap(res => res)
      )
  }
}
