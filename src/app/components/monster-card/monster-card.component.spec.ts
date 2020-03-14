import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCardComponent } from './monster-card.component';
import { MAT_MODULES } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MonsterCardComponent', () => {
  let component: MonsterCardComponent;
  let fixture: ComponentFixture<MonsterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MAT_MODULES, RouterTestingModule ],
      declarations: [ MonsterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
