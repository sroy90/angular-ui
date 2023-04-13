import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { SharedModule } from '../../../../shared/shared.module'

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  
  approveSuccess:boolean = false;
  tempflag:boolean = false;

  adminList:any = [];
  Id:any;
  obj:any;

  addForm!:FormGroup;
  searchForm!:FormGroup;
  searchFormFilter!:FormGroup;
  searchEmail: any;
  searchReimype:any;

  constructor(private formBuilder: FormBuilder,
              private adminsearvice: AdminService,
              ) { }

  ngOnInit(): void {
    this.createForm();
    this.createFormSearch();
    this.createFormFilter();

     // call service method
     this.adminsearvice.getAllUsers().subscribe(data=>{
      this.adminList = data;
      //console.log(data);
    })

  }

  
  createFormFilter(){
    this.searchFormFilter = this.formBuilder.group({
      searchContentFilter:new FormControl('', Validators.required)
    })
  }

  createFormSearch(){
    this.searchForm = this.formBuilder.group({
      searchContent:new FormControl('', Validators.required)
    })
  }

  createForm(){
    this.addForm = this.formBuilder.group({
      approvedAmount:new FormControl('', Validators.required)
    })
  }

  confirmAmount(){
    if(this.obj.requistedAmount>this.addForm.value.approvedAmount)
    {
      this.obj.flag = "1";
    this.obj.approvedAmount = this.addForm.value.approvedAmount;
   
      this.adminsearvice.updateUser(this.obj.id, this.obj).subscribe((result)=>{
      });

      this.approveSuccess = true;
    }
    else{
      alert("Ammount should be less then or equalto requistedAmount");
    }
  }

  onClickApprove(user:any){
    this.obj = user;
    console.log(this.obj)
  }

  onClickDecline(user:any){
    
    this.obj = user;
    this.obj.flag = "0";
    console.log(this.obj)

    this.adminsearvice.updateUser(this.obj.id, this.obj).subscribe((result)=>{
      });
  }

  onClickFilter(){
    localStorage.setItem('Email',  this.searchForm.value.searchContent);
    this.searchEmail = localStorage.getItem('Email');
  }
  onClickFilterReimType(){
    //this.searchReimype = this.searchFormFilter.value
    localStorage.setItem('ReimType',  this.searchFormFilter.value.searchContentFilter);
    this.searchReimype = localStorage.getItem('ReimType');
  }

  onLogout(){
    localStorage.clear();
  }
}
