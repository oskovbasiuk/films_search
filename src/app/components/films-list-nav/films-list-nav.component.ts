import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: "app-films-list-nav",
  templateUrl: "./films-list-nav.component.html",
  styleUrls: ["./films-list-nav.component.css"],
})
export class FilmsListNavComponent implements OnInit {
  @Input() page;
  @Input() maxPage;
  @Output() pageChange = new EventEmitter();
  @Input() btnDisabled;

  pageInput = new FormControl(this.page, [Validators.min(1)]);

  constructor() {}

  ngOnInit(): void {}
}
