import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';



const routes: Routes = [

  { path: 'search', component: FilmsComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'details/:id', component: FilmDetailsComponent }
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
