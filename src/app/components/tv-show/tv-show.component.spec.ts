import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowComponent } from './tv-show.component';
import { MAT_MODULES } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MAT_MODULES, RouterTestingModule ],
      declarations: [ TvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
