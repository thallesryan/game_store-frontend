import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor(private cartService:CartService) { }

  @Input() public idGame:number

  ngOnInit(): void {
    console.log(this.idGame)
  }

  addToCart(){
    this.cartService.addToCart({id:this.idGame})
  }
}
