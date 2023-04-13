import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserEmpService } from 'src/app/feature/employee/services/user-emp.service'
import {SharedService} from '../../services/shared/shared.service'
import {AuthService} from '../../../../auth/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css']
})
export class EmpTableComponent implements OnInit {

  addForm!: FormGroup;
  reimTypeList: any[];
  userList:any = [];

  obj:any = [];

  userEmail:any;
  tempEmail:string;

  temp:boolean = false;

  today:any = Date.now();

  constructor(private formBuilder: FormBuilder,
              private empsearvice: UserEmpService,
              private sendData:SharedService,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('Email');
    this.createAddReimForm();
    this.addForm.value.email = this.userEmail;

    // call service method
    //get
    this.empsearvice.getAllUsers().subscribe(data=>{
      this.userList = data;
      
    })


    //reimtype
    this.empsearvice.getAllReimType().subscribe(data=>{
      this.reimTypeList = data;
    })
  }
  
  //add
  addUser(){
    this.empsearvice.AddUser(this.addForm.value).subscribe((result)=>{
    
    });
    this.temp = true;
    this.router.navigate(['../emp-table'])
  }

  crossEvent(){
    location.reload();
  }
  
  createAddReimForm(){
    this.addForm = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      email:this.userEmail,
      reimType: new FormControl('', Validators.required),
      requestedAmount: new FormControl('', Validators.required),
      approvedAmount:0,
      currency: new FormControl('', Validators.required),
      recipelink:new FormControl('', Validators.required),
      flag:null
    })
  }

  
  //getter method for addForm control
  get date(){
    return this.addForm.get('date') as FormControl;
  }
  get reimType(){
    return this.addForm.get('reimType') as FormControl;
  }
  get requestedAmount(){
    return this.addForm.get('requestedAmount') as FormControl;
  }
  get currency(){
    return this.addForm.get('currency') as FormControl;
  }
  get recipelink(){
    return this.addForm.get('recipelink') as FormControl;
  }

  onClickUpdatePage(user:any){
    this.obj = user;
    //console.log(this.obj);

    // call shared service method
    this.sendData.setData(this.obj);
  }

  deleteStudent(id:any){
    this.userList.splice(-1,1)
    this.empsearvice.deleteStudent(id).subscribe((result)=>{
      alert("Record Deleted Successfully!!!");
    })
  }
}
