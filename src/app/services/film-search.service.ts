import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class FilmsSearchService {
  url: string = "http://www.omdbapi.com/?apikey=c82a4209";
  constructor(private http: HttpClient) {}
  searchByTitle(title, page) {
    return this.http.get(`${this.url}&s=${title}&page=${page}`);
  }
  getExactFilm(imdbID) {
    return this.http.get(`${this.url}&i=${imdbID}`);
  }
}
