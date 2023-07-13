import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenApi = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcxOWYyNjcyNTM4ZjcyODIwYTA2MTg4MTk2NmRmMCIsInN1YiI6IjViNjkxNzE5MGUwYTI2N2VlYjBmMjM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AXiGQeak7amL2MxM0C9HOLWJLG19Ffqo8A3EimovO68";

    const authReq = request.clone({
      headers: request.headers.set('Authorization', tokenApi),
      params: (request.params ? request.params : new HttpParams())
      .set('include_adult', "false")
      .set('language', "pt-BR")
      .set('page', "1")
      .set('region', "BR")
    });

    return next.handle(authReq);
  }
}
