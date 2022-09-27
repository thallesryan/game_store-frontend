import { Injectable } from '@angular/core';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  
  private games:Game[] = []
  


  addToCart(game:Game){
    this.games.push(game);
  }

  getGamesCart():Game[]{
    return this.games
  }

}
