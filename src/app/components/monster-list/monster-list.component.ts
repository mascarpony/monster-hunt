import { Component } from '@angular/core';
import { MonsterCard } from '../../models/monster-card';
import { MONSTERS } from '../../consts/monsters';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent {
  monsters: MonsterCard[] = MONSTERS;
}
