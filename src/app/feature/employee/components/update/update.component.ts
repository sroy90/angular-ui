import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';
import { UserEmpService } from '../../services/user-emp.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userList:any = [];
  reimTypeList: any[];

  obj:any=[];

  userEmp:any = [];

  alert:boolean = false;

  updateForm = new FormGroup({
    date: new FormControl('', Validators.required),
    reimType: new FormControl('', Validators.required),
    requestedAmount: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    //recipelink:new FormControl(''),
  })
  
  constructor(private recivedData:SharedService, private empService:UserEmpService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.obj = this.recivedData.getData();

    this.empService.getCurrentEmp(this.obj.id).subscribe((result)=>{
      //console.warn("result", result);

      this.userEmp = result;

      this.updateForm.setValue({
        date: this.userEmp.date,
        reimType: this.userEmp.reimType,
        requestedAmount: this.userEmp.requestedAmount,
        currency: this.userEmp.currency,
        //recipelink: this.userEmp.recipelink
      })

      //console.log(this.collection)  
    })
  }

  
  collectStudent(){
    if(this.updateForm.valid){
      //console.warn(this.editRecord.value)
      this.obj.date = this.updateForm.value.date;
      this.obj.reimType = this.updateForm.value.reimType;
      this.obj.requestedAmount = this.updateForm.value.requestedAmount;
      this.obj.currency = this.updateForm.value.currency;

      this.empService.updateCurrentEmp(this.obj.id, this.obj).subscribe((result)=>{
        console.log(this.obj);
        this.alert = true;
      })
    }
    else{
      alert('forms invalid!')
    }
  }
}
