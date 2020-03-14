import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { FormsModule } from '@angular/forms';
import { MAT_MODULES } from '../../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MAT_MODULES, BrowserAnimationsModule ],
      declarations: [ ToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
