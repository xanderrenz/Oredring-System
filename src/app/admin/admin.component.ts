import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Order, OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name: string = ''
  quantity: number = 0
  orders: Order[] = []

  displayedColumns: string[] = ['name', 'quantity', 'status', 'action'];
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

  approve(name: string): void {
    this.orderService.approveOrder(name);
  }

  reject(name: string): void {
    this.orderService.rejectOrder(name);
  }

}
