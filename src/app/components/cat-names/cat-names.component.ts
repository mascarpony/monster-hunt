import { Component, OnInit } from '@angular/core';
import { CatNamesService } from '../../services/cat-names.service';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';

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
        filter(value => value.length > 0),
        debounceTime(100),
        mergeMap(value => this.catNamesService.getCatNames(value))
      )
      .subscribe(names => {
        this.namesToDisplay = names;
      });
  }
}
