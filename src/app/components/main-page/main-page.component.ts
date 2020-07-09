import { Component, OnInit } from "@angular/core";
import { FilmsSearchService } from "src/app/services/film-search.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  constructor(private searchService: FilmsSearchService) {}
  searchResults: any = [];
  searchTitle: string;
  currentPage: number = 0;
  totalPages: number = 0;

  ngOnInit(): void {}

  pageChange(page) {
    if (this.searchResults.length > 0) {
      this.currentPage = Number(page);
      this.searchFilms({
        title: this.searchTitle,
        page: this.currentPage,
        paginationRequest: true,
      });
    }
  }

  searchFilms({ title, page, paginationRequest }) {
    this.searchResults = [];
    if (!paginationRequest) {
      this.currentPage = page;
    }
    this.searchService
      .searchByTitle(title, this.currentPage)
      .subscribe((res: any) => {
        this.searchResults = res.Search;
        this.totalPages = Math.ceil(res.totalResults / 10);
      });
  }
}
