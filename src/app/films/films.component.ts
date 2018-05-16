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
  ngOnInit() {

  }

}
