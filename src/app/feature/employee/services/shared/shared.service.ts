import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  obj:any = {}

  constructor() { }

  setData(data:any){
    this.obj = data;
  }

  getData(){
    return this.obj;
  }
}
