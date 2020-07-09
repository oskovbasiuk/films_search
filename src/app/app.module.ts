import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { FilmsListComponent } from "./components/films-list/films-list.component";
import { FilmItemComponent } from "./components/films-list/film-item/film-item.component";
import { FilmPageComponent } from "./components/film-page/film-page.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";
import { HeaderComponent } from "./components/header/header.component";
import { FilmsListNavComponent } from "./components/films-list-nav/films-list-nav.component";
import { FavBtnComponent } from "./components/fav-btn/fav-btn.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilmsListComponent,
    FilmItemComponent,
    FilmPageComponent,
    MainPageComponent,
    FavouritesComponent,
    HeaderComponent,
    FilmsListNavComponent,
    FavBtnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
