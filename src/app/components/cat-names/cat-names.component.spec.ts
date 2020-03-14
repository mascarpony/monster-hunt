import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNamesComponent } from './cat-names.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_MODULES } from '../../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CatNamesComponent', () => {
  let component: CatNamesComponent;
  let fixture: ComponentFixture<CatNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MAT_MODULES,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [ CatNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
