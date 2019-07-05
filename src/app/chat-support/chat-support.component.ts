import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss']
})
export class ChatSupportComponent implements OnInit {

  rows=['Payment issue','Plan suggestion', 'Fault', 'Additional information'];
  msgs=['Hello, i am facing network issue'];
  constructor() { }
  ticketdets=[{sno:'1',tid:'2879548',date:'28/01/2018',time:'08:26:00',state:'open'},{sno:'1',tid:'2879548',date:'28/01/2018',time:'08:26:00',state:'closed'}];
  ngOnInit() {
  }
  save(f){
    console.log(f.value);

    this.msgs.push(f.value.message_box);
    f.reset();
 
  }



}
