import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, MatTabsModule,
} from '@angular/material';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatNamesComponent } from './components/cat-names/cat-names.component';
import { BingoComponent } from './components/bingo/bingo.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';

export const MAT_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTabsModule
];

@NgModule({
  declarations: [
    AppComponent,
    MonsterCardComponent,
    MonsterListComponent,
    NotFoundComponent,
    ToDoListComponent,
    CatNamesComponent,
    BingoComponent,
    TvShowListComponent,
    TvShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ...MAT_MODULES,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
