import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curtidos',
  templateUrl: './curtidos.component.html',
  styleUrls: ['./curtidos.component.scss']
})
export class CurtidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
