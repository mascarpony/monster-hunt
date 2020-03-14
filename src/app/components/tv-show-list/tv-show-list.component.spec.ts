import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowListComponent } from './tv-show-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_MODULES } from '../../app.module';

describe('TvShowListComponent', () => {
  let component: TvShowListComponent;
  let fixture: ComponentFixture<TvShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MAT_MODULES ],
      declarations: [ TvShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
