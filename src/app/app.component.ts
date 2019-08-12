import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  title = "angular-voizfonica";
  chat_float_hide=false;
  logged_items=true; //to be authenticatd by user
  menuitems_logged_out: object[] = [    
    {path:"login",name:'LOGIN'},
    {path:"register",name:'REGISTER'},
    {path:"add",name:'+ NEW CONNECTION'},
    { path: "offers", name: "OFFERS" },
    { path: "plans", name: "PLANS" },
    { path: "recharge", name: "QUICK RECHARGE" }
  ];
  menuitems_logged_in: object[] = [ 
    {path:"logout",name:'LOGOUT'},
    {path:"add",name:'+ NEW CONNECTION'},   
    {path:"tickets",name:'TICKETS'},
    { path: "transactions", name: "TRANSACTIONS" },
    { path: "offers", name: "OFFERS" },
    { path: "plans", name: "PLANS" },
    { path: "recharge", name: "QUICK RECHARGE" },
    { path: "dashboard", name: "DASHBOARD" }
  ];

  constructor(private router: Router) {
  }

  isHome(){
    return this.router.url.split("/")[1]=="";
  }

  show_support(){
    this.chat_float_hide=false;
  }
  
  hide_support(){
    this.chat_float_hide=true;
  }
  
}
