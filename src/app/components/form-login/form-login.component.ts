import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/Credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private toast:ToastrService, private authService: AuthService) {}

  public loginForm:FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(3)]]
  });

  
  login(){
    this.authService.authenticate({email:this.loginForm.value.email,password:this.loginForm.value.password}).subscribe({
      next: (resp) => this.toast.info(resp.headers.get('authorization')),
      error: (er) => this.toast.error('Usuário e/ou senha inválidos')
    })
  }

  ngOnInit(): void {
  }

}
