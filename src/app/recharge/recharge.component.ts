import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  value_tab='1';
  value_tab2='1';
  value_tab3='1';
  constructor() { }

  ngOnInit() {
  }
  activate(num){
    this.value_tab=num;
    console.log(this.value_tab);
  }
  activate2(num1){
    this.value_tab2=num1;
    console.log(this.value_tab2);
  } 
  activate3(num1){
    this.value_tab3=num1;
    console.log(this.value_tab2);
  }
}
