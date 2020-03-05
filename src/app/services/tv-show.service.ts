import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TV_SHOWS, TV_SHOWS_SHORT, TvShow } from '../consts/tv-show';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  getShowById(id: number): Observable<TvShow> {
    return of(TV_SHOWS.find(show => show.id === id));
  }

  getShowsMetadata() {
    return of(TV_SHOWS_SHORT);
  }
}
