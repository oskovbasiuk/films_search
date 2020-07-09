import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();
  title = new FormControl("", [Validators.required]);
  @Output() titleChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchClick() {
    if (!this.title.invalid) {
      this.titleChange.emit(this.title.value);
      this.search.emit({
        title: this.title.value,
        page: 1,
      });
    }
  }
}
