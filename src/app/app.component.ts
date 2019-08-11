import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-voizfonica";
  selectedmenu: number;
  menuitems: object[] = [
    { path: "dashboard", name: "Dashboard" },
    { path: "plans", name: "View plans" },
    { path: "recharge", name: "Recharge" },
    { path: "offers", name: "View offers" },
    { path: "transactions", name: "Transaction history" },
    { path: "tickets", name: "Support history" }
  ];

  constructor(private router: Router) {
    this.selectedmenu = 0;
  }

  ishome() {
    return this.router.url.split("/")[1] == "";
  }

  selectMenu(index: number) {
    console.log(index);
    this.selectedmenu = index;
  }
}
