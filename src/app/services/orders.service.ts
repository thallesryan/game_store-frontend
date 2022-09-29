import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  public save(order:Order):Observable<Order>{
    return this.http.post<Order>(`${API_CONFIG.baseURL}/order`, order)
  }

  public findOrders(user_id:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${API_CONFIG.baseURL}/order/${user_id}`)
  }
}
