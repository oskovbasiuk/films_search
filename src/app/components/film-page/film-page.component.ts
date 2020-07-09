import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-film-page",
  templateUrl: "./film-page.component.html",
  styleUrls: ["./film-page.component.css"],
})
export class FilmPageComponent implements OnInit {
  constructor(private router: Router) {}
  fullFilmInfo;
  ngOnInit(): void {
    if (!history.state.data) {
      this.router.navigateByUrl("");
    } else {
      this.fullFilmInfo = history.state.data;
    }
  }
}
