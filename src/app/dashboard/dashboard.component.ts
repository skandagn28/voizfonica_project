import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dashboardlist = {
    img: "assets/user.png",
    str1: "Customer since 2015",
    user_name: "USER FULL NAME",
    no: "-- 9999999999 -- ",
    loc: "Chennai",
    name1: "Prepaid",
    name2: "Postpaid",
    name3: "Support",
    plan1: "current plan",
    plan2: "399 plan",
    plan3: "Expires on 01th July 2019",
    data1: "current data usage",
    data2: "70% of 500Mb used on 9867578689",
    data3: "Check Data Usage",
    dashboardname: "Dashboard",
    dashboardemail: "xxx@gmail.com",
    dashboardprimno: "8797867543",
    dashboardlasttrans: "15th Jun 2019",
    passwordname: "Change Password"
  };

  listofaccounts: object[] = [
    {
      accounticon: "desktop",
      accounttype: "Broadband",
      accountnumber: "988979998985",
      division: "Chennai north",
      dueamount: "500"
    },
    {
      accounticon: "usb",
      accounttype: "Dongle",
      accountnumber: "988979998985",
      division: "Chennai north",
      dueamount: "1000"
    },
    {
      accounticon: "phone",
      accounttype: "Prepaid Mobile",
      accountnumber: "988979998985",
      division: "Chennai north",
      dueamount: "1233"
    },
    {
      accounticon: "desktop",
      accounttype: "Broadband",
      accountnumber: "988979998985",
      division: "Chennai north",
      dueamount: "4321"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
