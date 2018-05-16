export class Film {
  Title?: string;
  id?: string;
  Plot?: string;
  Year?: string;
  Poster?: string;
  Type?: string;
  Director?: string;
  Actors?: string;
  Runtime?: string;
  Rating?: string;

  constructor (t?, id?, p?, y?, i?, ty?, d?, a?, r?, rating?) {
    this.Title = t;
    this.Plot = p;
    this.Year = y;
    this.Poster = i;
    this.Type = ty;
    this.id = id;
    this.Director = d;
    this.Actors = a;
    this.Runtime = r;
    this.Rating = rating;
  }
}
