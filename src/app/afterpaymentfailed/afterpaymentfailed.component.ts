import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterpaymentfailed',
  templateUrl: './afterpaymentfailed.component.html',
  styleUrls: ['./afterpaymentfailed.component.scss']
})
export class AfterpaymentfailedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirect_trans(){
    this.router.navigate(['transactions']);
  }
}
