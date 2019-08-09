import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-newconnection",
  templateUrl: "./newconnection.component.html",
  styleUrls: ["./newconnection.component.scss"]
})
export class NewconnectionComponent implements OnInit {
  connection = {
    first_name: "",
    last_name: "",
    username: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    password: "",
    type: ""
  };
  porting = {
    current_mobile_number: "",
    current_network: "",
    upc: "",
    requested_date_time: "",
    status: "",
    circle: ""
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  portin(f) {
    this.apiService.porting(this.porting).subscribe(data => {
      console.log(data);
    });
  }
  conn(f) {
    this.apiService.connection(this.connection).subscribe(data => {
      console.log(data);
    });
  }
}
