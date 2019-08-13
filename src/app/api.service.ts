import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Problems, Tickets, Chat,Message } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl="http://localhost:8000/";
  httpHeaders = new HttpHeaders({ "content-type": "application/json" });
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(this.baseUrl + "support/ticket", {
      headers: this.httpHeaders
    });
  }
  openTicket(ticket_details): Observable<Tickets[]> {
    return this.http.post<Tickets[]>(this.baseUrl + "support/ticket", ticket_details, {
      headers: this.httpHeaders
    });
  }
  reopenTicket(details): Observable<Tickets[]> {
    return this.http.put<Tickets[]>(this.baseUrl + "support/ticket",details, {
      headers: this.httpHeaders
    });
  }
  
  createChat(chat_details): Observable<Chat[]> {
    return this.http.post<Chat[]>(this.baseUrl + "support/chat", chat_details, {
      headers: this.httpHeaders
    });
  }

  getChat(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.baseUrl + "support/chat",{
      headers: this.httpHeaders
    });
  }

  postMessage(message):Observable<Message[]>{
    return this.http.post<Message[]>(this.baseUrl + "support/message", message, {
      headers: this.httpHeaders
    });
  }
  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl + "support/message", {
      headers: this.httpHeaders
    });
  }

  getTransactions(): Observable<any> {
    return this.http.get<any>(
      "http://localhost:8000/transaction_history/"
    );
  }

  postTransactions(transaction_details):Observable<any>{
    return this.http.post<any>(this.baseUrl + "transaction_history/", transaction_details, {
      headers: this.httpHeaders
    });
  }

  editTransaction(transaction_details):Observable<any>{
    return this.http.put<any>(this.baseUrl + "transaction_history/", transaction_details, {
      headers: this.httpHeaders
    });
  }


  postCards(card_details):Observable<any>{
    return this.http.post<any>(this.baseUrl + "cards/", card_details, {
      headers: this.httpHeaders
    });
  }

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
