import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatToolbarModule,
   MatFormFieldModule, MatDividerModule, MatAutocompleteModule, MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { FilmService } from './film.service';
import { RoutingModule } from './routing.module';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmsListComponent } from './films-list/films-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent,
    FilmsListComponent

  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
