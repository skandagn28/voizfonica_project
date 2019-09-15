import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-afterpayment',
  templateUrl: './afterpayment.component.html',
  styleUrls: ['./afterpayment.component.scss']
})
export class AfterpaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  redirect_trans(){
    this.router.navigate(['transactions']);
  }

}
