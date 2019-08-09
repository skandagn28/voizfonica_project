import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPlans(): Observable<any> {
    return this.http.get<any>("http://localhost:8000/plans/getPlans/");
  }

  login(us: string, ps: string): Observable<any> {
    const h: Object = { responseType: "text" };
    const body = { username: us, password: ps };
    return this.http.post<any>("http://127.0.0.1:8000/login/", body, h);
  }
  register(users: object): Observable<any> {
    const h: Object = { responseType: "text" };
    return this.http.post<any>("http://127.0.0.1:8000/register/", users, h);
  }
  offer_list(): Observable<any> {
    return this.http.get<any>("http://localhost:8000/offers/getOffers/");
  }

  getTransactions(): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8000/transaction_history/getTransactions/"
    );
  }

  connection(conn: object): Observable<any> {
    return this.http.post<any>("http://127.0.0.1:8000/connection/new/", conn);
  }
  porting(portin: object): Observable<any> {
    return this.http.post<any>(
      "http://127.0.0.1:8000/connection/portin/",
      portin
    );
  }
}
