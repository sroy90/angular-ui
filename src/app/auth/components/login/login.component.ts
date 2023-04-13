import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helper/validateform';
import { Router, Route } from '@angular/router';
import { connect } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  pass : string = "Password";
  isText : boolean=false;
  eyeIon : string="fa-eye-slash"
  loginForm!:FormGroup;
  admin:string="admin007@gmail.com";


  userEmail:any;
  email:any;

  // constructor(private fb: FormBuilder,private auth: AuthService,private router: Router) { }
  constructor(private fb: FormBuilder,private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText? this.eyeIon="fa-eye" : this.eyeIon="fa-eye-slash";
    this.isText? this.pass="text" : this.pass="password";
  }

  onLogin(){
    if(this.loginForm.valid && this.loginForm.value.email=="alisha.tathgur@nagarro.com"){
      

      //console.log(this.loginForm.value)
      //send the obj to database
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{


          //alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['../pending']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else if(this.loginForm.valid && this.loginForm.value.email!="alisha.tathgur@nagarro.com"){

      //this.userEmail = this.loginForm.value.email;
      
      localStorage.setItem('Email', this.loginForm.value.email)
      
      
      //send the obj to database
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{
          
          //console.log(this.loginForm.value.email)
          //alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['../emp-table']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else{
      // console.log("form is not falid")
      //throw the error using toster and with required files
      
        ValidateForm.validateAllFileds(this.loginForm);
        alert("Your form is invalid")
      
    }

  }

  
}

function converttoString(teemp: any) {
  throw new Error('Function not implemented.');
}