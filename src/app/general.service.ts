import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

constructor(private http: HttpClient) { }

login(us:string,ps:string): Observable<any>{
  const h: Object = {responseType: 'text'}
  const body = {username:us, password:ps}
  return this.http.post<any>("http://127.0.0.1:8000/login/",body,h);
}
register(users:object): Observable<any>{
  const h: Object = {responseType: 'text'}
  return this.http.post<any>("http://127.0.0.1:8000/register/",users,h);
}
}
