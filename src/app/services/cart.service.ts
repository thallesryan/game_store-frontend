import { AuthService } from 'src/app/services/auth.service';
import { Order } from './../models/Order';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  
  
  private games:Game[] = []
  


  addToCart(game:Game){
    let contain:boolean = false;
    let index:number
    
        for(let i = 0; i < this.games.length; i++){
          if(this.games[i].id == game.id){
            contain = true
            index = i
            break
          }
        }
     
        if(contain){
          this.games[index].quantity += 1
        }else{
          game.quantity = 1
          this.games.push(game);
        }
  }

  getGamesCart():Game[]{
    return this.games
  }

  clearCart(){
    this.games.splice(0, this.games.length)
  }

  calcTotal():number{
    if(this.games.length == 0) return 0
    return this.games.map( game => parseFloat(game.price) * game.quantity).reduce((ac, sum) => ac + sum);
  }
}
