import { Component, Inject, OnInit } from "@angular/core";

import { ApiService } from "../api.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface WalletData {
  animal: "panda" | "unicorn" | "lion";
}
@Component({
  selector: "wallet-data-example",
  templateUrl: "view_wallet.html"
})
export class WalletDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: WalletData) {}
}

export interface CardData {
  animal: "panda" | "unicorn" | "lion";
}
@Component({
  selector: "card-data-example",
  templateUrl: "view_card.html",
  styleUrls: ["./card.css"]
})
export class CardDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CardData) {}
}

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {
  transactions_list: Object[] = [
    {
      id: "",
      transaction_amount: "",
      transaction_date_time: "",
      transaction_state: "",
      for_account: ""
    }
  ];

  trans_array = [];
  constructor(public dialog: MatDialog, public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTransactions().subscribe(data => {
      this.trans_array = data;
    });
  }

  openWalletDialog(n, a, p) {
    this.dialog.open(WalletDataDialog, {
      width: "350px",
      data: {
        n: n,
        a: a,
        p: p
      }
    });
  }

  openCardDialog(name, type, number, cvv, bank) {
    this.dialog.open(CardDataDialog, {
      width: "350px",
      data: {
        name: name,
        type: type,
        number: number,
        cvv: cvv,
        bank: bank
      }
    });
  }
}
