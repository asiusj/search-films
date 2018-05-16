import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Film } from '../film.model';
import { FilmService } from '../film.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],

})
export class FilmsComponent implements OnInit {

  FilmsForm: FormGroup = this.fb.group({
    FilmItems: '',
  });
  storedFilms: Film[] = [];
  films: Film[] = [];
  str = new Subject<string>();
  searchString = '';
  constructor(private fs: FilmService, private fb: FormBuilder) {

  }

  search($e) {
    if ($e.target.value.length) {
      this.str.next($e.target.value);
      this.searchString = $e.target.value;
    }

  }

  getIds() {

    // tslint:disable-next-line:prefer-const
    let a = [];
    this.storedFilms.map(function (e) {
      a.push(e.id);
    });
    return a;
  }

  checkStored(founded: Film[]) {
    this.getIds().map(function (e, i) {
      founded.map(function (f) {
        if (f.id === e) {
          f.Saved = true;
          f.StorageId = i;

        }
      });
    });
    this.films = founded;

  }

  saveFilm(f: Film) {
    f.StorageId = this.storedFilms.length;
    this.fs.addFilmToLocalStorage(f);
  }

  deleteFilm(f: Film) {
    this.fs.removeFilmFromLocalStorage(f.StorageId);
    f.Saved = false;
    f.StorageId = null;
  }

  ngOnInit() {

    this.fs.searchStr(this.str).subscribe(_ => {

      if (_['Search']) {
        // tslint:disable-next-line:prefer-const
        let res = [];
        _['Search'].map(function (f) {
          res.push(new Film(f['Title'], f['imdbID'], null, f['Year'], f['Poster']));

        });
        this.films = res;
        this.checkStored(this.films);
      }

    });
    this.storedFilms = this.fs.getStoredFilms();

  }

}
