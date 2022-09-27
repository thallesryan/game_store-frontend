import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor( private http: HttpClient) { }
  
  private games:Game[] = []
  


  addToCart(game:Game){
    this.games.push(game);
  }

  getGamesCart():Game[]{
    return this.games
  }

  clearCart(){
    this.games.splice(0, this.games.length)
  }

  completeOrder():Observable<any>{
    return this.http.post(API_CONFIG.baseURL,{})
  }
}
