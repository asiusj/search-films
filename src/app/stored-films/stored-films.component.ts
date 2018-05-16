import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-stored-films',
  templateUrl: './stored-films.component.html',
  styleUrls: ['./stored-films.component.css']
})
export class StoredFilmsComponent implements OnInit {

  storedFilms: Film[];

  constructor() { }

  ngOnInit() {
  }

}
