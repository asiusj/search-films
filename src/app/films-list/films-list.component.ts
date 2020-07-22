import { Component, OnInit, Input } from "@angular/core";
import { Film } from "../film.model";
import { FilmService } from "../film.service";
import { Subject } from "rxjs";
import { Location } from "@angular/common";
import { nextTick } from "process";

@Component({
  selector: "app-films-list",
  templateUrl: "./films-list.component.html",
  styleUrls: ["./films-list.component.css"],
})
export class FilmsListComponent implements OnInit {
  constructor(private fs: FilmService, private location: Location) {}

  films: Film[] = [];
  @Input()
  str = new Subject<string>();
  storedFilms: Film[] = [];
  ngOnInit() {
    if (this.location.path() === "/search") {
      this.fs.searchStr(this.str).subscribe((newSearchResponse) => {
        if (newSearchResponse["Search"]) {
          // tslint:disable-next-line:prefer-const
          let res = [];
          newSearchResponse["Search"].map(function (f) {
            res.push(
              new Film(f["Title"], f["imdbID"], null, f["Year"], f["Poster"])
            );
          });
          this.films = res;
          this.checkStored(this.films);
        }
      });
    } else {
      this.fs.getStoredFilmsObs().subscribe((r) => {
        this.films = r;
      });
    }

    this.fs.getStoredFilmsObs().subscribe((r) => {
      this.storedFilms = r;
    });

    this.str.next("");
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
    this.fs.addFilmToLocalStorage(f).subscribe((r) => (this.storedFilms = r));
  }

  deleteFilm(f: Film) {
    this.fs.removeFilmFromLocalStorage(f.StorageId).subscribe((r) => {
      this.storedFilms = r;
      if (this.location.path() === "/stored") {
        this.films = r;
      }
    });
    f.Saved = false;
    f.StorageId = null;
  }
}
