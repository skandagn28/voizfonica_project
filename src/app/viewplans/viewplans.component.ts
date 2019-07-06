import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewplans',
  templateUrl: './viewplans.component.html',
  styleUrls: ['./viewplans.component.scss']
})
export class ViewplansComponent implements OnInit {

  selectedpane: number;
  constructor() { }

  ngOnInit() {
    this.selectedpane=1;
  }
  changepane(pane: number){
   
    this.selectedpane = pane;
}

}
