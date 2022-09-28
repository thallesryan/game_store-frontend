import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  constructor(private cartService: CartService) { }

  games:Game[]

  ngOnInit(): void {
    this.games = this.cartService.getGamesCart()
  }

  countProducts():number{
    return this.games.length
  }

}
