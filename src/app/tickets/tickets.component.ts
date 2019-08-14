import { Component, OnInit, Inject } from "@angular/core";
import { ApiService } from "../api.service";
import { Tickets } from "../interfaces";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';

export interface TicketData {
  animal: "panda" | "unicorn" | "lion";
}

@Component({
  selector: "ticket-data-example",
  templateUrl: "ticket.html",
  styleUrls: ["./ticket.css"],
  providers:[DatePipe]
})

export class TicketDataDialog1 {
  ticket_created=false;
  details;
  reason_details;
  trans_id;
  constructor(@Inject(MAT_DIALOG_DATA) public data:TicketData,private apiService:ApiService,private router:Router, private datePipe:DatePipe) {}

  update_ticket(details_temp,textinfo){
    var time_stamp2 = new Date();
    time_stamp2.setDate(time_stamp2.getDate() + 2 );
    var current=this.datePipe.transform(time_stamp2,'dd-MM-yy hh:mm:ss a');
    console.log(current);
    if(details_temp.transaction_id){
    }
    else{
    this.trans_id='';
    }
    this.details={
      'id':details_temp.id,
      'ticket_type':details_temp.ticket_type,
      'ticket_issue_date':details_temp.ticket_type,
      'ticket_resolution_proposed_date':current,
      'ticket_resolved_date':'',
      'ticket_resolution_response':'',
      'ticket_status':'Open',
      'transactions_linked':this.trans_id,
      'ticket_details':details_temp.ticket_details,
      'ticket_re_action_reason':textinfo,
      'chat_id':details_temp.chat_id
    }
    this.apiService.reopenTicket(this.details).subscribe(data=>{this.ticket_created=true;});
  }
}

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
  providers: [ApiService]
})
export class TicketsComponent implements OnInit {
  tickets_list: any = [];

  constructor(public dialog: MatDialog,private apiService: ApiService, private router:Router) {}

  ngOnInit() {
    this.get_tickets();
  }

  get_tickets() {
    this.apiService.getTickets().subscribe(data => (this.tickets_list = data));
  }
  reopen_ticket(id,ticket_status,ticket_type,ticket_issue_date,ticket_details,ticket_resolution_proposed_date,ticket_resolved_date,ticket_resolution_response,transaction_id,chat_id){
    this.dialog.open(TicketDataDialog1, {
      data: {
        id:id,
        ticket_status:ticket_status,
        ticket_type:ticket_type,
        ticket_issue_date:ticket_issue_date,
        ticket_details:ticket_details,
        ticket_resolution_proposed_date:ticket_resolution_proposed_date,
        ticket_resolved_date:ticket_resolved_date,
        ticket_resolution_response:ticket_resolution_response,
        transaction_id:transaction_id,
        chat_id:chat_id,
      }
    });
  }
  navigate_new(){
    this.router.navigate(['newticket']);
  }
}
