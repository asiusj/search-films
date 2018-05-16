import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';



const routes: Routes = [

  { path: 'search', component: FilmsComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'details/:id', component: FilmDetailsComponent },
  { path: 'stored', component: FilmsListComponent},
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class RoutingModule { }
