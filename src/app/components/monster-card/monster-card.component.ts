import { Component, Input } from '@angular/core';
import { MonsterCard } from '../../models/monster-card';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})

export class MonsterCardComponent {
  @Input() monster: MonsterCard;
}
