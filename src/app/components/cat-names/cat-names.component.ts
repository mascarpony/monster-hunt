import { Component, OnInit } from '@angular/core';
import { CatNamesService } from '../../services/cat-names.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cat-names',
  templateUrl: './cat-names.component.html',
  styleUrls: ['./cat-names.component.scss']
})
export class CatNamesComponent implements OnInit {
  text = new FormControl();
  namesToDisplay = [];

  constructor(private catNamesService: CatNamesService) {}

  ngOnInit() {
    this.text.valueChanges
      .pipe(
        debounceTime(100),
        switchMap(value =>
          value ? this.catNamesService.getCatNames(value) : of([])
        )
      )
      .subscribe(names => {
        this.namesToDisplay = names;
      });
  }
}
