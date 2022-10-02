import { Injectable } from "@angular/core";

export interface Order {
    name: string;
    quantity: number;
    status?: 'pending' | 'approved' | 'rejected'
}

@Injectable({
    providedIn: "root"
})
  export class OrderService {
    private orders: Order[] = [];
  
    constructor() {}

    getOrder(): Order[]{
        return this.orders;
    }

    addOrder(order: Order) {
        order.status = 'pending';
        this.orders.push({...order});
    }

    approveOrder(name: string) {
        const order = this.orders.find(order => order.name == name)
        if (order)
            order.status = 'approved'
    }

    rejectOrder(name: string) {
        const order = this.orders.find(order => order.name == name)
        if (order)
            order.status = 'rejected'
    }
}