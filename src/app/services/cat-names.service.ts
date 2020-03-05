import { Injectable } from '@angular/core';
import { CAT_NAMES } from '../consts/cat-names';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatNamesService {
  getCatNames(text: string): Observable<string[]> {
    const listOfNames = CAT_NAMES.filter(name => name.toUpperCase().startsWith(text.toUpperCase()));
    return of(listOfNames).pipe(delay(this.getRandomInt(5, 20) * 100));
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
