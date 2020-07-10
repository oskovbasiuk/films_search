import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fav-btn",
  templateUrl: "./fav-btn.component.html",
  styleUrls: ["./fav-btn.component.css"],
})
export class FavBtnComponent implements OnInit {
  @Input() imdbID;
  isFavourite: boolean;

  constructor() {}

  ngOnInit(): void {
    const favString = localStorage.getItem("favourites");
    let favourites = [];

    if (favString) {
      favourites = JSON.parse(favString);
    }

    this.isFavourite = favourites.find((filmItem) => {
      return filmItem.imdbID === this.imdbID;
    })
      ? true
      : false;
  }
  toggleFavourites(event) {
    event.stopPropagation();

    const favString = localStorage.getItem("favourites");
    let favourites = [];

    if (favString) {
      favourites = JSON.parse(favString);
    }

    if (this.isFavourite) {
      favourites = favourites.filter((filmItem) => {
        return filmItem.imdbID != this.imdbID;
      });
    } else {
      favourites.push({ imdbID: this.imdbID });
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    this.isFavourite = !this.isFavourite;
  }
}
