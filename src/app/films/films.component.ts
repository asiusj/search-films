import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Film } from '../film.model';
import { FilmSearchService } from '../film-search.service';
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
  films: Film[] = [];
  str = new Subject<string>();
  searchString = '';
  constructor(private fs: FilmSearchService, private fb: FormBuilder) {

  }

  search($e) {
    if ($e.target.value.length) {
      this.str.next($e.target.value);
      this.searchString = $e.target.value;
    }

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
      }

    });
  }

}
