import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { FilmPageComponent } from "./components/film-page/film-page.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "favourites",
    component: FavouritesComponent,
  },
  {
    path: "full_info/:id",
    component: FilmPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
