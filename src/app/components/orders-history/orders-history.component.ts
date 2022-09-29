import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../../services/orders.service';
import { getLocaleDateFormat } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit, AfterViewInit {

  DATA: Order[] = []
  
   displayedColumns: string[] = ['id', 'date', 'total', 'actions'];
   dataSource = new MatTableDataSource<Order>(this.DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private orderService: OrdersService, private activatedRoute: ActivatedRoute) { }
  
  id:number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
 
  ngOnInit(): void {
    this.orderService.findOrders(this.id).subscribe({
      next: resp => {
        this.DATA = resp
        this.dataSource = new MatTableDataSource<Order>(resp);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  ngAfterViewInit(): void {
      //this.dataSource.paginator = this.paginator
  }
  
}
