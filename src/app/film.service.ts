import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, Subject, of, observable } from 'rxjs';
import { Film } from './film.model';
import { debounceTime, distinctUntilChanged, switchMap, debounce, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  storedFilms: Observable<Film[]>;

  private log(message: string) {
    console.log(message);
  }


  constructor(private http: HttpClient) {
    this.storedFilms = this.getStoredFilmsObs();
  }

  searchStr(str: Subject<string>) {
    return str.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(s => this.getFilmsList(s)));
  }

  getFilmsList(s: string): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiUrl + '?s=' + s + '&apikey=e290de4d&r=json&v=2');
  }

  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(environment.apiUrl + '?i=' + id + '&apikey=e290de4d&r=json&v=2');
  }

  getStoredFilms() {
    // tslint:disable-next-line:prefer-const
    let s = JSON.parse(localStorage.getItem('storedFilms'));
    return s == null ? [] : s;
  }

  getStoredFilmsObs(): Observable<Film[]> {
    // tslint:disable-next-line:prefer-const
    let s = JSON.parse(localStorage.getItem('storedFilms'));
    if (s == null) {
      s = [];
    }

    return new Observable(o => {
      o.next(s);
      o.complete();
    });
  }

  addFilmToLocalStorage(f: Film): Observable<Film[]> {
    let s = [];
    s = this.getStoredFilms();
    f.Saved = true;
    s.push(f);

    localStorage.setItem('storedFilms', JSON.stringify(s));
    this.storedFilms = this.getStoredFilmsObs();
    return this.storedFilms;
  }

  removeFilmFromLocalStorage(id: number): Observable<Film[]> {
    // tslint:disable-next-line:prefer-const
    let s = this.getStoredFilms();
    s.map(function (e, i) {
      if (e['StorageId'] === id) {
        s.splice(i, 1);
      }
    });
    localStorage.setItem('storedFilms', JSON.stringify(s));
    this.storedFilms = this.getStoredFilmsObs();
    return this.storedFilms;
  }
}
