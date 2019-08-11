import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Tickets } from "../interfaces";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
  providers: [ApiService]
})
export class TicketsComponent implements OnInit {
  tickets_list: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.get_tickets();
  }

  get_tickets() {
    this.apiService.getTickets().subscribe(data => (this.tickets_list = data));
  }
  // change_tickets(id){
  //   this.apiService.reopenTicket(id).subscribe(data=>this.tickets_list.push(this.ticket_details));
  // }
}
