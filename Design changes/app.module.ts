import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule } from "@angular/forms";
<<<<<<< HEAD
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
import{HttpClientModule} from '@angular/common/http';
import { TicketsComponent } from './tickets/tickets.component'
import {GeneralService} from './general.service';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ViewplansComponent, RechargeComponent, OffersComponent, DevicesComponent, StoreComponent, TransactionsComponent, ChatSupportComponent, LoginComponent, RegisterComponent, FloatingSearchBarComponent, SplashComponent, PaymentInitiatorComponent,  TicketsComponent],
=======

import { DashboardComponent } from "./dashboard/dashboard.component";
import {
  ViewplansComponent,
  DialogDataExampleDialog
} from "./viewplans/viewplans.component";
import { RechargeComponent } from "./recharge/recharge.component";
import { OffersComponent } from "./offers/offers.component";
import { DevicesComponent } from "./devices/devices.component";
import { StoreComponent } from "./store/store.component";
import {
  TransactionsComponent,
  WalletDataDialog,
  CardDataDialog
} from "./transactions/transactions.component";
import { ChatSupportComponent } from "./chat-support/chat-support.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FloatingSearchBarComponent } from "./subcomponents/floating-search-bar/floating-search-bar.component";
import { SplashComponent } from "./splash/splash.component";
import { PaymentInitiatorComponent } from "./payment-initiator/payment-initiator.component";
import { ChatFloatComponent } from "./subcomponents/chat-float/chat-float.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  HttpClient,
  HttpClientModule
} from "../../node_modules/@angular/common/http";
import { ApiService } from "./api.service";
import {
  MatDialogRef,
  MatDialogModule
} from "../../node_modules/@angular/material/dialog";
import { NewconnectionComponent } from "./newconnection/newconnection.component";
import { TicketsComponent } from "./tickets/tickets.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewplansComponent,
    RechargeComponent,
    OffersComponent,
    DevicesComponent,
    StoreComponent,
    TransactionsComponent,
    ChatSupportComponent,
    LoginComponent,
    RegisterComponent,
    FloatingSearchBarComponent,
    SplashComponent,
    PaymentInitiatorComponent,
    ChatFloatComponent,
    DialogDataExampleDialog,
    WalletDataDialog,
    CardDataDialog,
    NewconnectionComponent,
    TicketsComponent
  ],
>>>>>>> d4e6d557542e2c4359cce9970df6cf96d8fccbf4
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
=======
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
>>>>>>> d4e6d557542e2c4359cce9970df6cf96d8fccbf4
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }, ApiService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog, WalletDataDialog, CardDataDialog]
})
export class AppModule {}
