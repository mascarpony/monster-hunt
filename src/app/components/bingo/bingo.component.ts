import { Component, OnInit } from '@angular/core';
import { BINGO, BingoItem } from '../../consts/bingo';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {
  bingo: BingoItem[] = [];

  constructor() { }

  arreyOfCards(arrey) {
    return arrey.map(item => ({...item}))
  }

  ngOnInit() {
    this.bingo = this.arreyOfCards(BINGO);
  }

  onToggleItem(id: number) {
    this.bingo = this.bingo.map(item => {
      if (item.id === id) {
        item.highlighted = !item.highlighted;
      }
      return item;
    });
  }

  onResetBingo() {
    this.bingo = this.arreyOfCards(BINGO);
  }
}
