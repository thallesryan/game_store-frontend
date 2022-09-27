import { Router } from '@angular/router';
import { OrderItem } from './../../models/OrderItem';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from './../../services/orders.service';
import { GamesService } from './../../services/games.service';
import { Game } from './../../models/Game';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private orderService: OrdersService, private authService: AuthService, 
    private toast:ToastrService, private router:Router) { }

  games:Game[]
  orderItems:OrderItem[] = []

  private order:Order = {
    user: {id:this.authService.getUserId()},
    items: [{game:{id:0},quantity:0 }]
  }

  private getOrderItems(){
    this.games.map(game => this.orderItems.push({game:{id:game.id},quantity:game.quantity}));
    console.log(this.orderItems)
    this.order.items = this.orderItems;
  }
  ngOnInit(): void {
     this.games = this.cartService.getGamesCart()
    console.log(this.games)
  }

  clearCart(){
    this.cartService.clearCart();
  }

  completeOrder(){
    this.getOrderItems()
    this.orderService.save(this.order).subscribe({
      next: () => {
        this.clearCart()
        this.toast.success('Pedido Feito com sucesso!', 'Pedido')
        this.router.navigate(['games'])
      }
    });
  }
}
