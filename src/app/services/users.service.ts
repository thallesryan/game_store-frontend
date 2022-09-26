import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  findAll():Observable<User[]>{
    return this.http.get<User[]>(`${API_CONFIG.baseURL}/users`)
  }
}
