import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Order, OrderService } from 'src/services/order.service';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = ''
  quantity: number = 0
  orders: Order[] = []

  displayedColumns: string[] = ['name', 'quantity', 'status'];
  constructor(private orderService: OrderService, private changeDetectorRefs: ChangeDetectorRef, private userService: UserService) {
    this.getOrders();
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.orderService.addOrder({name: this.name, quantity: this.quantity});
    this.getOrders();
    this.changeDetectorRefs.detectChanges();
  }

  getOrders(): void {
    this.orders = [...this.orderService.getOrder()];
  }

  logout(): void {
    this.userService.logout();
  }

}
