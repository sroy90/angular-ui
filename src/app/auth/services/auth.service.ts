import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //http: any; //extra
  userEmail:string;
  private baseUrl="http://localhost:35403/api/signup/"
  constructor(private http: HttpClient) { }
  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }


  setEmail(email:string){
    this.userEmail = email;
  }
  
  getEmail(){
    return this.userEmail;
  }
}