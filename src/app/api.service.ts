import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Problems, Tickets } from "./interfaces";

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
  private baseUrl = "http://localhost:8000/support";
  httpHeaders = new HttpHeaders({ "content-type": "application/json" });
  getProblems(): Observable<Problems[]> {
    return this.http.get<Problems[]>(this.baseUrl + "/problems", {
      headers: this.httpHeaders
    });
  }
  getTickets(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(this.baseUrl + "/ticket", {
      headers: this.httpHeaders
    });
  }
  openTicket(ticket_details): Observable<Tickets[]> {
    return this.http.post<Tickets[]>(this.baseUrl + "/ticket", ticket_details, {
      headers: this.httpHeaders
    });
  }
  reopenTicket(id): Observable<Tickets[]> {
    return this.http.put<Tickets[]>(this.baseUrl + "/ticket/" + id + "/", {
      headers: this.httpHeaders
    });
  }
}
