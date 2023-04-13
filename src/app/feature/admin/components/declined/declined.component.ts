import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AdminService} from 'src/app/feature/admin/services/admin.service'

@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {
  adminList: any= [];
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
    
  onLogout(){
    localStorage.clear();
  }

}
