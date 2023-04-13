
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import validateform from '../../helper/validateform';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type : string = "password";
  isText : boolean=false;
  eyeIon : string= "fa-eye-slash"
  signUpForm!:FormGroup;
  str:boolean= false;
  chck:boolean= false;
  


  counter : number =0;


  constructor(private fb: FormBuilder,private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      email:['',Validators.required],
      fullName:['',Validators.required],
      panNumber:['',Validators.required],
      bank:['',Validators.required],
      bankAccountNumber:['',Validators.required],
      password:['',Validators.required],
      retypePassword:['',Validators.required],
    })
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText? this.eyeIon="fa-eye" : this.eyeIon="fa-eye-slash";
    this.isText? this.type="text" : this.type="password";
    
  }
  


  checkstring(s : string) : void{
    for(let i=0;i<s.length;i++){
      if((s[i]>='a' && s[i]<='z') && (s[i]>='A' && s[i]<='Z')){

      }
      else{
        this.chck=true;
        break;
      }
    }
  }
   checkNumber(s : string) : void{
    for(let i=0;i<s.length;i++){
      if((s[i]>='0' && s[i]<='9')){

      }
      else{
        this.chck=true;
        break;
      }
    }
  }




  onSignup(){
    // if(this.signUpForm.value.password!=this.signUpForm.value.retypePassword){
    //   validateform.validateAllFileds(this.signUpForm);
    //   alert("Password are not same")
    // }
    if(this.signUpForm.valid && this.signUpForm.value.password==this.signUpForm.value.retypePassword && this.signUpForm.value.email!="alisha.tathgur@nagarro.com"){

    }
    if(this.signUpForm.valid && this.signUpForm.value.password==this.signUpForm.value.retypePassword && this.signUpForm.value.email!="alisha.tathgur@nagarro.com"){
      //console.log(this.signUpForm.value)
      //send the obj to database
      this.auth.signUp(this.signUpForm.value).subscribe({
        next:(res=>{
          this.router.navigate(['../login'])
          alert(res.message);
          this.signUpForm.reset();
          
        })
        ,error:(err=>{
          alert(err?.error.message)
        })
      })
    }
    else{
      // console.log("form is not falid")
      //throw the error using toster and with required files
      validateform.validateAllFileds(this.signUpForm);
      if(this.signUpForm.value.email=="alisha.tathgur@nagarro.com"){
        this.chck=true;
        alert("you can't use admin id");
      }
      else if(this.signUpForm.value.password!=this.signUpForm.value.retypePassword){
        this.str=true;
      }
      else
        alert("Your form is invalid");
    }
  }
}