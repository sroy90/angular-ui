import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AdminService} from 'src/app/feature/admin/services/admin.service'

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  adminList:any = [];
  searchForm!:FormGroup;
  searchEmail: any;
  
  constructor(private addminService:AdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormSearch();

    this.addminService.getAllUsers().subscribe(data=>{
      this.adminList = data;
    });
  }

  
  createFormSearch(){
    this.searchForm = this.formBuilder.group({
      searchContent:new FormControl('', Validators.required)
    })
  }

  onClickFilter(){
    localStorage.setItem('Email',  this.searchForm.value.searchContent);
    this.searchEmail = localStorage.getItem('Email');
  }

  // onClickFilterReimType(){
  //   //this.searchReimype = this.searchFormFilter.value
  //   localStorage.setItem('ReimType',  this.searchFormFilter.value.searchContentFilter);
  //   this.searchReimype = localStorage.getItem('ReimType');
  // }
    
  onLogout(){
    localStorage.clear();
  }
}
