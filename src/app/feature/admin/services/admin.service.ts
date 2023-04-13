import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:35403/api/';

  
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.baseUrl}user`);
  }

  updateUser(id:any, data:any){
    return this.http.put(`${this.baseUrl}user/update/${id}`,data);
  }

}
