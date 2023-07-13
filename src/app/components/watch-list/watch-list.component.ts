import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { Filme } from 'src/app/shared/filme';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  filmes: Filme[] = [];
  // yetToWatchMovies: Filme[] = [];
  yetToWatchMovies: any;
  watchedMovies: Filme[] = [];
  teste: boolean = false;

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.filmesService.getFilmes.subscribe(
      res => {
        this.yetToWatchMovies = res.results.slice(0, 10);
        console.log(this.yetToWatchMovies);
      }
    );
  }

  ngDoCheck(): void {
    // if (this.movies.length && !this.watchedMovies.length) {
    //   this.yetToWatchMovies = this.movies.filter((m) => !m.isFav && !m.isWatched);
    //   this.watchedMovies = this.movies.filter((m) => m.isWatched);
    // }
  }

  onFavClick(movie: any): void {
    // this.filmesService.updateMovie({ ...movie, isFav: !movie.isFav, isWatched: movie.isFav ? true : movie.isWatched }).subscribe((updatedMovie) => {
    //   if (updatedMovie.isWatched) {
    //     const alreadyWatched = this.watchedMovies.find(movie => movie.id === updatedMovie.id);
    //     if (alreadyWatched) {
    //       alreadyWatched.isFav = updatedMovie.isFav
    //       this.watchedMovies = this.watchedMovies.map((m) => {
    //         if (m.id === updatedMovie.id) {
    //           return updatedMovie;
    //         }
    //         return m;
    //       })
    //     } else {
    //       this.watchedMovies.push(updatedMovie);
    //     }
    //     this.yetToWatchMovies = this.yetToWatchMovies.filter((m) => m.id !== updatedMovie.id);
    //   }
    //   else {
    //     this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
    //     this.yetToWatchMovies.push(updatedMovie);
    //   }
    // });
  }

}
