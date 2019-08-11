import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  rowvalues=[{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'},{sno:'1',tid:'2879548',amt:'256.86',date:'28/01/2018',time:'08:26:00',state:'Success'}];
  constructor() { }

  ngOnInit() {
  }
}
