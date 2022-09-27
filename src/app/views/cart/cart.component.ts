import { GamesService } from './../../services/games.service';
import { Game } from './../../models/Game';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  games:Game[]

  ngOnInit(): void {
     this.games = this.cartService.getGamesCart()
    console.log(this.games)
  }

  clearCart(){
    this.cartService.clearCart();
  }

  completeOrder(){
    
  }
}
