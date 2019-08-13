import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment-initiator',
  templateUrl: './payment-initiator.component.html',
  styleUrls: ['./payment-initiator.component.scss'],
  providers:[DatePipe]
})
export class PaymentInitiatorComponent implements OnInit {
  trans_details;
  card_details;
  time_stamp;
  constructor(private apiService:ApiService,private router:Router,private datePipe:DatePipe) { }

  ngOnInit() {
  }
  post_card_based(name,number,cvv,amount,f){
    // this.time_stamp = Date.now();
    // this.time_stamp=this.datePipe.transform(this.time_stamp,'dd-MM-yy hh:mm:ss a');
    // this.card_details={
    // card_holder_name:name,
    // card_type:'Debit card',
    // card_number :number,
    // cvv:cvv,
    // card_bank:'ICICI',
    // processing_charges:'10'
    // };
    // if(f.valid){
    //   this.apiService.postCards(this.card_details).subscribe();
    //  }
    // console.log(this.card_details);
    // this.trans_details={
    //   transaction_amount:amount,
    //   transaction_date_time:this.time_stamp,
    //   transaction_state:'success',
    //   payment_mode:'Card',
    //   bank_name:'',
    //   wallet_linked:1,
    //   card_linked:1,
    //   refund_status:false,
    //   ticket_status:false
    // };
    // console.log(this.trans_details);
    //  if(f.valid){
    //   //this.apiService.postTransactions(this.trans_details).subscribe(data=>{this.router.navigate(['/transactions'])});
    //  }

  }
  // post_wallet_based(){

  // }
  // post_bank_based(){

  // }
  validate(f){

  }
}


