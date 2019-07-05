import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
