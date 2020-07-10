import { Component, OnInit, Input } from "@angular/core";
import { SearchService } from "src/app/services/search.service";

@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
  styleUrls: ["./film-item.component.css"],
})
export class FilmItemComponent implements OnInit {
  @Input() imdbID;

  shortPlotFullInfo;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService
      .getExactItemByID(this.imdbID, "short")
      .subscribe((res: any) => {
        this.shortPlotFullInfo = res;
      });
  }
}
