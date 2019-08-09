import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  users = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    idproof1: "",
    idproof2: "",
    idproof3: "",
    password: "",
    retypepassword: ""
  };
  proof: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.proof = "";
  }

  proofChange(p) {
    this.proof = p.target.value;
  }

  validate(f, users) {
    console.log(this.users);
    if (f.valid) {
      this.apiService.register(users.value).subscribe(data => {
        console.log(data);
      });
    } else {
      console.log("2");
    }
  }
}
