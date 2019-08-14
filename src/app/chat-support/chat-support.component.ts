import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { DatePipe } from '@angular/common';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss'],
  providers:[DatePipe]
})

export class ChatSupportComponent implements OnInit {
  user_logged_in='false';//To be set based on token
  user_id;//To be set based on retrieval of user from users and current login
  ip_address;
  time_stamp; 
  chat_set=[];
  chat_id;
  chat_details;
  message;
  messages_obtained=[];
  messages_display=[];
  text_box;
  start_time;

  constructor(private datePipe:DatePipe,private apiService:ApiService,private http:HttpClient){
    // if(){
    //   this.user_logged_in=true;
    // }
    if(this.user_logged_in=='false'){
      this.user_id='temp';
    }
    // else{
      //this.user_id=
    // }
    // this.messages_display=[
    //   {
    //     sender_type:'user',
    //     message_content:'something',
    //     time_stamp:'11/08/19 11:17:27 am'
    //   },
    //   {
    //     sender_type:'bot',
    //     message_type:'information',
    //     message_content:'something',
    //     time_stamp:'11/08/19 11:17:27 am'
    //   },
    //   {
    //     sender_type:'bot',
    //     message_type:'option',
    //     message_content:'something',
    //     time_stamp:'11/08/19 11:17:27 am'
    //   }
    // ];
    this.get_ip();
  }

  ngOnInit(){
  }

  get_ip(){
    this.http.get<any>('https://api.ipify.org?format=json').subscribe(data => {this.ip_address=data['ip'];console.log(this.ip_address);this.post_chat();});
  }
  
  post_chat(){
    this.time_stamp = Date.now();
    this.time_stamp=this.datePipe.transform(this.time_stamp,'dd-MM-yy hh:mm:ss a');
    this.start_time=this.time_stamp;
    this.chat_details={
      user_id:this.user_id,
      ip_address:this.ip_address,
      start_time:this.time_stamp
    }
    this.apiService.createChat(this.chat_details).subscribe(data=>{this.get_chat()});
  }

  get_chat(){
    this.apiService.getChat().subscribe(data=>{this.chat_set=data;this.chat_set.forEach(element => {if((element.ip_address==this.ip_address)&&(element.start_time==this.start_time)&&(element.user_id==this.user_id)){
      this.chat_id=element.id;
      console.log(this.chat_id);
      this.message={
        chat_id:this.chat_id,
        user_id:"",
        sender_type:'bot',
        message_content:"Hi",
        message_type:'Information',
        time_stamp:this.time_stamp
      };
      this.post_message();
    } 
    });}) ; 
  }
  
  push_message(tempval){
    this.time_stamp = Date.now();
    this.time_stamp=this.datePipe.transform(this.time_stamp,'dd-MM-yy hh:mm:ss a');
      // this.messages_display.push({
      //   chat_id:this.chat_id,
      //   user_id:this.user_id,
      //   sender_type:'user',
      //   message_content:tempval,
      //   message_type:'null',
      //   time_stamp:this.time_stamp
      // });
      this.message={
        chat_id:this.chat_id,
        user_id:this.user_id,
        sender_type:'user',
        message_content:tempval,
        message_type:'null',
        time_stamp:this.time_stamp
      };
      this.post_message();
  }

  on_user_submit(){
    if(this.text_box!=""){
      this.push_message(this.text_box);
    }
    this.text_box="";
  }

  post_message(){
    this.apiService.postMessage(this.message).subscribe(data=>{this.get_messages();});
      // data=>{this.messages_display=this.get_messages();console.log(this.messages_display.length)});
  }

  get_messages(){
    this.messages_display.forEach(element => {
      this.messages_display=[];
    });
    this.apiService.getMessages().subscribe(data=>{this.messages_obtained=data;this.messages_obtained.forEach(element => {if(element.chat_id==this.chat_id){
      this.messages_display.push(element)
    }});});
  }
}


// // this.time_stamp = Date.now();
//     // this.time_stamp=this.datePipe.transform(this.time_stamp,'dd-MM-yy hh:mm:ss a');
    


// //   problems_list:any=[];
// //   tic_type:any;
// //   chat_list:any=[];
// //   reason_box:boolean=false;
// //   back;
// //   back_list:any=[];
// //   temp_count_list:any=[];
// //   temp_count=0;
// //   raise_info:any=[];
// //   ticket_details={};
// //   tickets_list:any=[];
// //   date: Date = new Date(); 
// //   chat="";
// //   current_state;
// //   new_state;
// //   constructor(private apiService:ApiService,private router:Router) { 
// //     this.getProblems();
// //     this.ticket_details=<Tickets>{};
// //     this.ticket_details={
// //     ticket_type:'',
// //     ticket_issue_date:'',
// //     ticket_resolution_proposed_date:'',
// //     ticket_resolved_date:'',
// //     ticket_resolution_response:'',
// //     ticket_re_action_reason:'',
// //     ticket_status:'',
// //     chat:''
// //     };
// //   }
  
// //   ngOnInit() {
// //   }
// //   router_navigate(){
    
// //       this.router.navigateByUrl('/new');
   
// //   }
// //   set_tic_type(stringinput){
// //     this.tic_type=stringinput;
// //   }
// //   getProblems(){
// //     this.apiService.getProblems().subscribe(data=>this.problems_list=data);
// //     this.problems_list.forEach(element => {
// //       if(element.problems=="Initial"){
// //         this.chat_list.push(element.solutions);
// //       }
// //     });
// //   }

// //   auto_display(){
// //       this.reason_box=false;
// //       for (let index = 0; index < this.temp_count_list.pop(); index++) {
// //         this.chat_list.pop();        
// //       }
      
// //       for (let index = 0; index < this.temp_count_list.pop(); index++) {
// //         this.chat_list.pop();        
// //       }
// //       this.display(this.back_list.pop(),this.back_list.pop());
// //       console.log(this.temp_count_list)
// //     }

//   // get_tickets(){
//   //   this.apiService.getTickets().subscribe(data=>this.tickets_list=data);
//   // }

// //   display(stringval,stringval2){
// //     this.current_state=stringval;
// //     console.log(stringval,stringval2);
// //     this.temp_count=0;
// //     this.back=stringval2;
// //     if(stringval=='New connection'){
// //       this.new_state=true;
// //     }
// //     else{
// //       this.new_state=false;
// //     }
// //     if(stringval=='Initial'){
// //       this.initial_state=true;
// //     }
// //     else{
// //       this.initial_state=false;
// //     }
// //     if(stringval=='Other'){
// //       this.reason_box=true;
// //     }
// //     this.problems_list.forEach(element => {
// //       if(element.problems==stringval){
// //         this.chat_list.push(element.solutions);
// //         this.temp_count++;
// //       }
// //     });
// //     this.back_list.push(stringval2);
// //     this.temp_count_list.push(this.temp_count);
// //     }

// // get_tickets(){
// //   this.apiService.getTickets().subscribe(data=>this.tickets_list=data);
// // }

// //   raise_ticket(){
// //     this.chat_list.forEach(element => {
// //       this.chat+=element+'\n';
      
// //     });
// //     this.ticket_details={
// //       'ticket_type':String(this.tic_type),
// //       'ticket_issue_date':String(this.date),
// //       'ticket_resolution_proposed_date':String(this.date),
// //       'ticket_resolved_date':String(this.date),
// //       'ticket_resolution_response':'null',
// //       'ticket_re_action_reason':'null',
// //       'ticket_status':'open',
// //       'chat':String(this.chat)
// //       };
// //       console.log(this.ticket_details);
// //     this.apiService.openTicket(this.ticket_details).subscribe(data=>this.tickets_list.push(this.ticket_details))
// //     console.log(this.chat);
// //     alert('Successful, redirecting to tickets section...');
// //   }
// // }





// //   getTickets(){
// //     this.apiService.getTickets().subscribe(data=>this.ticket_list=data);
// //   }

// //   set_tic_type(stringval){
// //     this.tic_type=stringval;
// //     console.log(this.tic_type);
// //   }

// // }

// // ticket_list:any=[];
// // this.getTickets();
// // this.type_list.push(element.type);
// //           this.last_index_list.push(this.last_index);
