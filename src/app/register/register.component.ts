import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  proof: string;
  users= {firstname: '',lastname:'',email:'',phonenumber:'',idproof1:'',idproof2:'',idproof3:'',password:'',retypepassword:''};
  constructor() { }

  ngOnInit() {
    
    this.proof= ""
  }

  proofChange(p){
    this.proof=p.target.value
  }

  validate(f){
    console.log(this.users)
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
