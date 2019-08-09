import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewplansComponent } from "./viewplans/viewplans.component";
import { RechargeComponent } from "./recharge/recharge.component";
import { OffersComponent } from "./offers/offers.component";
import { DevicesComponent } from "./devices/devices.component";
import { StoreComponent } from "./store/store.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { ChatSupportComponent } from "./chat-support/chat-support.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PaymentInitiatorComponent } from "./payment-initiator/payment-initiator.component";
import { NewconnectionComponent } from "./newconnection/newconnection.component";

const appRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { title: "VoizFonica - Dashboard" }
  },
  {
    path: "plans",
    component: ViewplansComponent,
    data: { title: "VoizFonica - Plans" }
  },
  {
    path: "recharge",
    component: RechargeComponent,
    data: { title: "VoizFonica - Recharge / Pay bill" }
  },
  {
    path: "offers",
    component: OffersComponent,
    data: { title: "VoizFonica - View offers" }
  },
  {
    path: "devices",
    component: DevicesComponent,
    data: { title: "VoizFonica - Devices" }
  },
  {
    path: "store",
    component: StoreComponent,
    data: { title: "VoizFonica - Find store" }
  },
  {
    path: "transactions",
    component: TransactionsComponent,
    data: { title: "VoizFonica - Transaction history" }
  },
  {
    path: "support",
    component: ChatSupportComponent,
    data: { title: "VoizFonica - Support" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "VoizFonica - Login" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "VoizFonica - Register" }
  },
  {
    path: "payment",
    component: PaymentInitiatorComponent,
    data: { title: "VoizFonica - Register" }
  },
  {
    path: "support",
    component: ChatSupportComponent,
    data: { title: "VoizFonica - Support" }
  },
  {
    path: "add",
    component: NewconnectionComponent,
    data: { title: "VoizFonica - Connection" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
