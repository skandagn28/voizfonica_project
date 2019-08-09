import { Component, OnInit, Inject, AfterViewInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "../api.service";
import * as $ from "jquery";

export interface DialogData {
  animal: "panda" | "unicorn" | "lion";
}
@Component({
  selector: "dialog-data-example",
  templateUrl: "viewcosting.html"
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  selector: "app-viewplans",
  templateUrl: "./viewplans.component.html",
  styleUrls: ["./viewplans.component.scss"]
})
export class ViewplansComponent implements OnInit, AfterViewInit {
  selectedpane: number;

  plans = [];

  constructor(public dialog: MatDialog, public apiService: ApiService) {}

  ngOnInit() {
    this.selectedpane = 2;
    this.apiService.getPlans().subscribe(data => {
      this.plans = data;
    });
  }

  ngAfterViewInit() {}

  changepane(pane: number) {
    this.selectedpane = pane;
    console.log($("#ppl").html());
  }

  openDialog(l, r, i) {
    this.dialog.open(DialogDataExampleDialog, {
      width: "350px",
      data: {
        l: l,
        r: r,
        i: i
      }
    });
  }
}
