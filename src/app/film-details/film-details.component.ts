import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmSearchService } from '../film-search.service';
import { Film } from '../film.model';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film = new Film();
  constructor(
    private route: ActivatedRoute,
    private fs: FilmSearchService
  ) { }

  ngOnInit() {
    this.getFilm();
  }

  getFilm(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.fs.getFilmById(id)
        .subscribe(f => {
          this.film = new Film(
            f['Title'],
            f['imdbID'],
            f['Plot'],
            f['Year'],
            f['Poster'],
            null,
            f['Director'],
            f['Actors'],
            f['Runtime'],
            f['imdbRating']);
        });
  }
}
