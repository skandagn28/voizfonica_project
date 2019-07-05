import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-initiator',
  templateUrl: './payment-initiator.component.html',
  styleUrls: ['./payment-initiator.component.scss']
})
export class PaymentInitiatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  validate(f){
    if(f.valid){
      console.log('1');
      console.log(f.valid);
      console.log(f);
    }
    else{
      console.log('2');
    }
  }
}


