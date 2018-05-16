import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatToolbarModule,
   MatFormFieldModule, MatDividerModule, MatAutocompleteModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { FilmSearchService } from './film-search.service';
import { RoutingModule } from './routing.module';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent,

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
    ReactiveFormsModule
  ],
  providers: [FilmSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
