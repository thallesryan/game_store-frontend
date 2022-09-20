import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/Credentials';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private toast:ToastrService ) {}

  public loginForm:FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(3)]]
  });

  login(){
    this.toast.error('Usuário e/ou senha invlidos', 'Login')
    this.loginForm.get('password').setValue('')
  }

  ngOnInit(): void {
  }

}
