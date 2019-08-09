import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { OffersComponent } from './offers/offers.component';
import { DevicesComponent } from './devices/devices.component';
import { StoreComponent } from './store/store.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FloatingSearchBarComponent } from './subcomponents/floating-search-bar/floating-search-bar.component';
import { SplashComponent } from './splash/splash.component';
import { PaymentInitiatorComponent } from './payment-initiator/payment-initiator.component';
import { ChatFloatComponent } from './subcomponents/chat-float/chat-float.component';
import {GeneralService} from './general.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ViewplansComponent, RechargeComponent, OffersComponent, DevicesComponent, StoreComponent, TransactionsComponent, ChatSupportComponent, LoginComponent, RegisterComponent, FloatingSearchBarComponent, SplashComponent, PaymentInitiatorComponent, ChatFloatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule {}
