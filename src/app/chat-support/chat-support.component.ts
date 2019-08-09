import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Tickets } from "../interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat-support",
  templateUrl: "./chat-support.component.html",
  styleUrls: ["./chat-support.component.scss"],
  providers: [ApiService]
})
export class ChatSupportComponent implements OnInit {
  initial_state = true;
  option_state = true;
  problems_list: any = [];
  tic_type: any;
  chat_list: any = [];
  reason_box: boolean = false;
  back;
  back_list: any = [];
  temp_count_list: any = [];
  temp_count = 0;
  raise_info: any = [];
  ticket_details = {};
  tickets_list: any = [];
  date: Date = new Date();
  chat = "";
  current_state;
  new_state;
  constructor(private apiService: ApiService, private router: Router) {
    this.getProblems();
    this.ticket_details = <Tickets>{};
    this.ticket_details = {
      ticket_type: "",
      ticket_issue_date: "",
      ticket_resolution_proposed_date: "",
      ticket_resolved_date: "",
      ticket_resolution_response: "",
      ticket_re_action_reason: "",
      ticket_status: "",
      chat: ""
    };
  }

  ngOnInit() {}
  router_navigate() {
    this.router.navigateByUrl("/add");
  }
  set_tic_type(stringinput) {
    this.tic_type = stringinput;
  }
  getProblems() {
    this.apiService
      .getProblems()
      .subscribe(data => (this.problems_list = data));
    this.problems_list.forEach(element => {
      if (element.problems == "Initial") {
        this.chat_list.push(element.solutions);
      }
    });
  }

  auto_display() {
    this.reason_box = false;
    for (let index = 0; index < this.temp_count_list.pop(); index++) {
      this.chat_list.pop();
    }

    for (let index = 0; index < this.temp_count_list.pop(); index++) {
      this.chat_list.pop();
    }
    this.display(this.back_list.pop(), this.back_list.pop());
    console.log(this.temp_count_list);
  }

  display(stringval, stringval2) {
    this.current_state = stringval;
    console.log(stringval, stringval2);
    this.temp_count = 0;
    this.back = stringval2;
    if (stringval == "New connection") {
      this.new_state = true;
    } else {
      this.new_state = false;
    }
    if (stringval == "Initial") {
      this.initial_state = true;
    } else {
      this.initial_state = false;
    }
    if (stringval == "Other") {
      this.reason_box = true;
    }
    this.problems_list.forEach(element => {
      if (element.problems == stringval) {
        this.chat_list.push(element.solutions);
        this.temp_count++;
      }
    });
    this.back_list.push(stringval2);
    this.temp_count_list.push(this.temp_count);
  }

  // get_tickets(){
  //   this.apiService.getTickets().subscribe(data=>this.tickets_list=data);
  // }

  raise_ticket() {
    this.chat_list.forEach(element => {
      this.chat += element + "\n";
    });
    this.ticket_details = {
      ticket_type: String(this.tic_type),
      ticket_issue_date: String(this.date),
      ticket_resolution_proposed_date: String(this.date),
      ticket_resolved_date: String(this.date),
      ticket_resolution_response: "null",
      ticket_re_action_reason: "null",
      ticket_status: "open",
      chat: String(this.chat)
    };
    console.log(this.ticket_details);
    this.apiService
      .openTicket(this.ticket_details)
      .subscribe(data => this.tickets_list.push(this.ticket_details));
    console.log(this.chat);
    alert("Successful, redirecting to tickets section...");
  }
}

//   getTickets(){
//     this.apiService.getTickets().subscribe(data=>this.ticket_list=data);
//   }

//   set_tic_type(stringval){
//     this.tic_type=stringval;
//     console.log(this.tic_type);
//   }

// }

// ticket_list:any=[];
// this.getTickets();
// this.type_list.push(element.type);
//           this.last_index_list.push(this.last_index);
