import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
  func(s: HTMLInputElement, t: HTMLInputElement){
    console.log(s.value, t.value)
  }

}
