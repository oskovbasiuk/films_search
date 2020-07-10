import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "src/app/services/search.service";
@Component({
  selector: "app-film-page",
  templateUrl: "./film-page.component.html",
  styleUrls: ["./film-page.component.css"],
})
export class FilmPageComponent implements OnInit {
  imdbID: string;
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}
  fullPlotFilmInfo;
  ngOnInit(): void {
    this.imdbID = this.route.snapshot.paramMap.get("id");
    this.searchService
      .getExactItemByID(this.imdbID, "full")
      .subscribe((res: any) => {
        this.fullPlotFilmInfo = res;
      });
  }
}
