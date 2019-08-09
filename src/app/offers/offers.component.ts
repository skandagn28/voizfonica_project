
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  carosal_list:object[]=[
    {imagename:"assets/offer.png"},
    {imagename:"assets/image2.png"},
    {imagename:"assets/home_broadband.png"}

  ]

  offers:object[]=[]

  offer_list:object[]=[
    {offer_img:"assets/images/offimg.png",type_of_users:"Prepaid",original_amt:"Recharge for Rs.149/-",offer_percentage:"20% off",statement:"HURRY UP!!!!"},
    {offer_img:"assets/images/offimg.png",type_of_users:"Postpaid",original_amt:"ANY TALKTIME VALUE",offer_percentage:"50% off",statement:"HURRY UP!!!!"},
    {offer_img:"assets/images/offimg.png",type_of_users:"Dongle",original_amt:"ANY TALKTIME VALUE",offer_percentage:"40% off",statement:"HURRY UP!!!!"}
  ]

  constructor() { }

  ngOnInit() {
  }

}

