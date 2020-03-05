import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TvShow } from '../consts/tv-show';
import { TvShowService } from './tv-show.service';


@Injectable({
  providedIn: 'root'
})
export class TvShowGuard implements Resolve<TvShow> {
  constructor(private tvShowService: TvShowService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<TvShow> {
    return this.tvShowService.getShowById(Number(route.paramMap.get('id')));
  }
}
