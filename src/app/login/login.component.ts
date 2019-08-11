import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit() {

  }
  
  validate(f,us,ps){
    if(f.valid){

      this.generalService.login(us.value,ps.value)
      .subscribe(data=>{console.log(data)});
    }
    else{
      console.log('2');
    }
  }
  func(s: HTMLInputElement, t: HTMLInputElement){
    console.log(s.value, t.value)
  }

}
