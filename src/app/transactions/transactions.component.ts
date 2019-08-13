import { Component, Inject, OnInit, ɵConsole } from "@angular/core";
import { ApiService } from "../api.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatePipe } from "@angular/common";

export interface WalletData {
  animal: "panda" | "unicorn" | "lion";
}

@Component({
  selector: "wallet-data-example",
  templateUrl: "view_wallet.html"
})

export class WalletDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: WalletData) {}
}

export interface TicketData {
  animal: "panda" | "unicorn" | "lion";
}

@Component({
  selector: "ticket-data-example",
  templateUrl: "ticket.html",
  styleUrls: ["./ticket.css"],
  providers:[DatePipe]
})

export class TicketDataDialog {
  details;
  trans_array = [];
  time_stamp;
  transaction_id:number;
  reason_details;
  ticket_created=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data:TicketData,private datePipe:DatePipe,private apiService:ApiService) {}
  raise_ticket(trans_array,textdata,id){
    console.log(trans_array);
    this.reason_details=textdata;
    this.transaction_id=id;
    this.time_stamp = Date.now();
    this.time_stamp=this.datePipe.transform(this.time_stamp,'dd-MM-yy hh:mm:ss a');
    var time_stamp2 = new Date();
    time_stamp2.setDate(time_stamp2.getDate() + 2 );
    var current=this.datePipe.transform(time_stamp2,'dd-MM-yy hh:mm:ss a');
    this.details={
      'ticket_type':'Payment',
      'ticket_issue_date':this.time_stamp,
      'ticket_resolution_proposed_date':current,
      'ticket_resolved_date':'',
      'ticket_resolution_response':'',
      'ticket_status':'Open',
      'transactions_linked':this.transaction_id,
      'ticket_details':this.reason_details,
      'ticket_re_action_reason':'',
      'chat_id':''
    }
    // console.log(this.details);
    this.apiService.openTicket(this.details).subscribe(data=>{this.ticket_created=true;trans_array.forEach(element => {
      if(element.id==this.transaction_id){
        element.ticket_status=true;
        console.log(element);
        this.apiService.editTransaction(element).subscribe();
      }
    });});
  }
}

export interface CardData {
  animal: "panda" | "unicorn" | "lion";
}

@Component({
  selector: "card-data-example",
  templateUrl: "view_card.html",
  styleUrls: ["./card.css"]
})

export class CardDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CardData) {}
}

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
  providers:[DatePipe]
})

export class TransactionsComponent implements OnInit {
  trans_array=[];
  constructor(public dialog: MatDialog, public apiService: ApiService,private datePipe:DatePipe) {}

  ngOnInit() {
    this.apiService.getTransactions().subscribe(data => {
      this.trans_array = data;console.log(this.trans_array);
    });
  }

  openWalletDialog(n, a, p) {
    this.dialog.open(WalletDataDialog, {
      width: "350px",
      data: {
        n: n,
        a: a,
        p: p
      }
    });
  }

  openCardDialog(name, type, number, cvv, bank,processing) {
    this.dialog.open(CardDataDialog, {
      width: "350px",
      data: {
        name: name,
        type: type,
        number: number,
        cvv:cvv,
        bank:bank,
        processing: processing,
      }
    });
  }

  open_raise_ticket(trans_array,id) {
    this.dialog.open(TicketDataDialog, {
      data: {
        id:id,
        trans_array:trans_array
      } 
    });
  }
  refund_ticket(trans_array,id){
    var transaction_id=id;
    trans_array.forEach(element => {
      if(element.id==transaction_id){
        element.refund_status=true;
        this.apiService.editTransaction(element).subscribe();
      }});
  }
}
