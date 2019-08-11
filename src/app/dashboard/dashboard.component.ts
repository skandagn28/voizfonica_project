import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listofaccounts: object[] = [
    {accounticon: "desktop", accounttype: 'Broadband', accountnumber: "988979998985", division: "Chennai north", dueamount: "500"},
    {accounticon: "usb", accounttype: 'Dongle', accountnumber: "988979998985", division: "Chennai north", dueamount: "1000"},
    {accounticon: "phone", accounttype: 'Prepaid Mobile', accountnumber: "988979998985", division: "Chennai north", dueamount: "1233"}
    ,{accounticon: "desktop", accounttype: 'Broadband', accountnumber: "988979998985", division: "Chennai north", dueamount: "4321"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
