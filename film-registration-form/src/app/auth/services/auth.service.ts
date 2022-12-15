import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseURL = "http://localhost:4200/api";
  constructor( private  http: HttpClient) { }
  
  public signin( email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/login`, 
    { 
      email:email, 
      password: password
    }).pipe(first(),tap((tokens)=>{
      console.log(tokens)
    }))
  }
}
