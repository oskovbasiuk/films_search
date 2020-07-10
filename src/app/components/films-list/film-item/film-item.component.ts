import { Component, OnInit, Input, HostListener } from "@angular/core";
import { SearchService } from "src/app/services/search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
  styleUrls: ["./film-item.component.css"],
})
export class FilmItemComponent implements OnInit {
  @Input() imdbID;
  @HostListener("click") onClick() {
    this.router.navigate(["full_info", this.imdbID]);
  }
  shortPlotFullInfo;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.searchService
      .getExactItemByID(this.imdbID, "short")
      .subscribe((res: any) => {
        this.shortPlotFullInfo = res;
      });
  }
}
