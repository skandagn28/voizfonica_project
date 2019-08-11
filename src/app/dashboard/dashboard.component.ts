import { Component, OnInit, Inject, AfterViewInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "../api.service";

export interface CheckUsageData {
  obj: {};
}
@Component({
  selector: "checkusage",
  templateUrl: "checkusage.html"
})
export class CheckUsageDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CheckUsageData) {}
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dashboardList: [
    {
      first_name: "Skanda";
      last_name: "R";
      email_address: "sgnmail01@gmail.com";
      phone_number: "9789090840";
      alternate_phone: "9080730506";
      kyc_verified: false;
      profile_pic: "/media/uploads/profile_pic/fba88e42-5a13-40e0-9abd-1c9724d23239.jpg";
      user_joined_date: "2019-08-11T17:06:08Z";
      accounts_linked: [
        {
          account_type: "prepaid";
          plan_activated: [
            {
              plans_name: "flex 999";
              plans_price: 999;
              plan_type: "dongle";
              plan_description: "3GB Plan";
              full_talktime: false;
              topup_delivered: "0";
              value_delivered: {
                id: null;
                flags: false;
                calls: "0";
                data: "3000000";
                sms: "0";
              };
              validity: {
                id: null;
                prepaid_validity: "0";
                postpaid_duration: "30";
              };
              costtocompany: { id: null; processing: "20"; gst: "20" };
              local: {
                id: null;
                flags: false;
                calls: "-";
                data: "1 p/MB";
                sms: "-";
              };
              roaming: {
                id: null;
                flags: false;
                calls: "-";
                data: "1 p/MB";
                sms: "-";
              };
              international: {
                id: null;
                flags: false;
                calls: "-";
                data: "10 p/MB";
                sms: "-";
              };
            }
          ];
          current_usage: {
            id: null;
            flags: false;
            calls: "20";
            data: "20000";
            sms: "0";
          };
          main_balance: 200.0;
          expiry: "2019-08-11T17:27:53Z";
          amount_due: 0.0;
          payment_deadline: "2019-08-11T17:27:57Z";
          proofs_attached: [{ proof: "/media/uploads/0007-profilepic.jpg" }];
          circle: "Chennai";
          imei: "98989887879959";
        }
      ];
      transactions_linked: [
        {
          transaction_amount: 500;
          transaction_date_time: "2019-08-09T01:10:46Z";
          transaction_state: "Complete";
          wallet_linked: {
            wallet_name: "PhonePe";
            wallet_auth_id: "9898989696966";
            wallet_processing_charges: "0";
          };
          card_linked: {
            card_holder_name: "-";
            card_type: "-";
            card_number: "-";
            cvv: "-";
            card_bank: "-";
          };
        }
      ];
      cards_linked: [
        {
          card_holder_name: "Skanda Gurunathan R";
          card_type: "VISA";
          card_number: "9785445896549875";
          cvv: "985";
          card_bank: "Indian Overseas Bank";
        }
      ];
      wallets_linked: [
        {
          wallet_name: "PhonePe";
          wallet_auth_id: "9898989696966";
          wallet_processing_charges: "0";
        }
      ];
      tickets_linked: [
        {
          id: 3;
          ticket_type: "payment";
          ticket_issue_date: "09-08-2019 09:09:12 AM";
          ticket_resolution_proposed_date: "10-08-2019 09:09:12 AM";
          ticket_resolved_date: "-";
          ticket_resolution_response: "-";
          ticket_re_action_reason: "-";
          ticket_status: "Open";
          chat: "Hello";
        }
      ];
    }
  ];
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProfile().subscribe(data => {
      console.log(data);
    });
  }

  openDialog(obj) {
    this.dialog.open(CheckUsageDataDialog, {
      data: {
        obj: obj
      }
    });
  }
}
