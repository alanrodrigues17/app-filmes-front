import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from './components/watch-list/watch-list.component'
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { FilmesService } from './services/filmes.service';
import { CurtidosComponent } from './components/curtidos/curtidos.component';
@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    ToolBarComponent,
    ButtonComponent,
    MovieTileComponent,
    CurtidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    FilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
