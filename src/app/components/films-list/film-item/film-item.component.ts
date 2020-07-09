import { Component, OnInit, Input, HostListener } from "@angular/core";
import { FilmsSearchService } from "src/app/services/film-search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
  styleUrls: ["./film-item.component.css"],
})
export class FilmItemComponent implements OnInit {
  @Input() imdbID;
  @HostListener("click") onClick() {
    this.navigateToFullPage();
  }
  constructor(
    private searchService: FilmsSearchService,
    private router: Router
  ) {}
  fullInfo;
  navigateToFullPage() {
    this.router.navigate(["full_info"], { state: { data: this.fullInfo } });
  }
  ngOnInit(): void {
    this.searchService.getExactFilm(this.imdbID).subscribe((res: any) => {
      this.fullInfo = res;
    });
  }
}
