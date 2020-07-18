import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-voizfonica";
<<<<<<< HEAD
  chat_float_hide=false;
  logged_items=false;
  menuitems_logged_out: object[] = [    
    {path:"login",name:'LOGIN'},
    {path:"register",name:'REGISTER'},
    {path:"add",name:'+ NEW CONNECTION'},
    { path: "offers", name: "OFFERS" },
    { path: "plans", name: "PLANS" },
    { path: "recharge", name: "QUICK RECHARGE" }
  ];
  menuitems_logged_in: object[] = [ 
    {path:"add",name:'+ NEW CONNECTION'},   
    {path:"tickets",name:'TICKETS'},
    { path: "transactions", name: "TRANSACTIONS" },
    { path: "offers", name: "OFFERS" },
    { path: "plans", name: "PLANS" },
    { path: "recharge", name: "QUICK RECHARGE" },
    { path: "dashboard", name: "DASHBOARD" }
=======
  selectedmenu: number;
  menuitems: object[] = [
    { path: "dashboard", name: "Dashboard" },
    { path: "plans", name: "View plans" },
    { path: "recharge", name: "Recharge" },
    { path: "offers", name: "View offers" },
    { path: "transactions", name: "Transaction history" },
    { path: "tickets", name: "Support history" }
>>>>>>> d4e6d557542e2c4359cce9970df6cf96d8fccbf4
  ];

  constructor(private router: Router) {
  }

<<<<<<< HEAD
  isHome(){
    return this.router.url.split("/")[1]=="";
  }

  show_support(){
    this.chat_float_hide=false;
  }
  
  hide_support(){
    this.chat_float_hide=true;
=======
  ishome() {
    return this.router.url.split("/")[1] == "";
  }

  selectMenu(index: number) {
    console.log(index);
    this.selectedmenu = index;
>>>>>>> d4e6d557542e2c4359cce9970df6cf96d8fccbf4
  }
}
