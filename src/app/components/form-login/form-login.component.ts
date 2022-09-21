import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/Credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private toast:ToastrService, private authService: AuthService, private router:Router) {}

  public loginForm:FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(3)]]
  });

  
  login(){
    let creds = {email:this.loginForm.value.email,password:this.loginForm.value.password}
    this.authService.authenticate(creds).subscribe({
      next: (resp) => {
        this.authService.sucessfulLogin(resp.headers.get('authorization').substring(7))
        this.router.navigate(['home'])
      },
      error: (er) => this.toast.error('Usuário e/ou senha inválidos')
    })
  }

  ngOnInit(): void {
  }

}
