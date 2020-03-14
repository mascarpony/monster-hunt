import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterListComponent } from './monster-list.component';
import { MAT_MODULES } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MonsterCardComponent } from '../monster-card/monster-card.component';

describe('MonsterListComponent', () => {
  let component: MonsterListComponent;
  let fixture: ComponentFixture<MonsterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MAT_MODULES, RouterTestingModule ],
      declarations: [ MonsterListComponent, MonsterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
