import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.css"],
})
export class FavouritesComponent implements OnInit {
  favourites: any;
  constructor() {}
  ngOnInit(): void {
    const favString = localStorage.getItem("favourites");
    let favourites = [];

    if (favString) {
      favourites = JSON.parse(favString);
    }
    this.favourites = favourites;
  }
}
