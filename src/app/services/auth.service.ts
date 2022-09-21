import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../config/api.config';
import { Credentials } from '../models/Credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  jwtService: JwtHelperService = new JwtHelperService();

  authenticate(creds: Credentials) {
    return this.http.post(`${API_CONFIG.baseURL}/login`, creds, {
      //Observa a resposta da req, conteúdo dela é text(token)
      observe: 'response',
      responseType: 'text'
    })
  }

  sucessfulLogin(authToken:string){
    localStorage.setItem('token',authToken);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    return token != null ? !this.jwtService.isTokenExpired(token): false;
  }
}
