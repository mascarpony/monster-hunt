import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoComponent } from './bingo.component';
import { MAT_MODULES } from '../../app.module';

describe('BingoComponent', () => {
  let component: BingoComponent;
  let fixture: ComponentFixture<BingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MAT_MODULES ],
      declarations: [ BingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
