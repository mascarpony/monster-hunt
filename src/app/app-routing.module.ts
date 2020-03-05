import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { CatNamesComponent } from './components/cat-names/cat-names.component';
import { BingoComponent } from './components/bingo/bingo.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { TvShowGuard } from './services/tv-show.guard';


const routes: Routes = [
  {
    path: 'monsters',
    component: MonsterListComponent,
  }, {
    path: 'todo',
    component: ToDoListComponent,
  }, {
    path: 'cats',
    component: CatNamesComponent,
  }, {
    path: 'bingo',
    component: BingoComponent,
  }, {
    path: 'tv-show',
    component: TvShowListComponent,
    children: [{
      path: ':id',
      component: TvShowComponent,
      resolve: {
        show: TvShowGuard
      }
    }]
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'monsters'
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
