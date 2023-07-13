import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faNotFav, faEye as faNotWatched } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() id: number = 0;
  @Input() isWatched: boolean = false;
  @Input() isFav: boolean = false;
  @Input() name: string = '';
  @Output() favClick = new EventEmitter();
  @Output() watchedClick = new EventEmitter();

  faFav = faNotFav;
  faWatched = faNotWatched;

  constructor() { }

  ngOnInit(): void {
    this.faFav = this.isFav ? faHeart : faNotFav;
    this.faWatched = this.isWatched ? faEye : faNotWatched;
    this.imageUrl = "https://image.tmdb.org/t/p/w500/" + this.imageUrl;
  }

  ngOnChange(): void {
    console.log('Change', this.isFav)
  }

  onFavClick(): void {
    this.favClick.emit();
  }

  onWatchedClick(): void {
    this.watchedClick.emit();
  }

}
