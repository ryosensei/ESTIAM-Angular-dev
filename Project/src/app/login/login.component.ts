import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      login: 'TEST',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(loginFormInfos)
  {
    console.log("Login : " + loginFormInfos.login, "Password : " + loginFormInfos.password);
  }

  
}
