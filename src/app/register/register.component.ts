import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  proof: string;
  constructor() { }

  ngOnInit() {
    this.proof= ""
  }

  proofChange(p){
    this.proof=p.target.value
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
