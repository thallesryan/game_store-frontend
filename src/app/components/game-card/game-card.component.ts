import { Game } from './../../models/Game';
import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor(private cartService:CartService) { }

  @Input() public game:Game

  
  ngOnInit(): void {
    console.log(this.game)
  }

  addToCart(){
    this.cartService.addToCart(this.game)
  }

}
