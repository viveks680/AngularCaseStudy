import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({});
  constructor(private authService:AuthServiceService) {}

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  loginProcess() {
    if(this.authService.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){ 
          console.log(result);
          alert("login successful");
        } else {
          alert("invalid email or password");
        }
      })
  }
}
}
