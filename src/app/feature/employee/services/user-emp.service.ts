import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEmpService {

  baseUrl = 'http://localhost:35403/api/';

  constructor(private http: HttpClient) { }

  AddUser(data:any){
    return this.http.post(`${this.baseUrl}user/post`,data);
  }

  getAllUsers(){
    return this.http.get(`${this.baseUrl}user`);
  }

  getAllReimType():Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}reimtype`);
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.baseUrl}user/delete/${id}`)
  }

  getCurrentEmp(id:any){
    return this.http.get(`${this.baseUrl}user/${id}`)
  }

  updateCurrentEmp(id:any, data:any){
    return this.http.put(`${this.baseUrl}user/update/${id}`,data);
  }
}
