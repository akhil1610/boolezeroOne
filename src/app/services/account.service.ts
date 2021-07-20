import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public orders: any = [];

  public activeDelivery: any = {label: "Delivery", id: 1, iconName: "location-outline"};
  public activeOrderType: any = {label: "ASAP", id: 1,  iconName: "restaurant-outline"};

  public activePreferenceFilter: number = 0;
  public activePriceFilter: number = 0;

  constructor() { }

  getOrders() {
    return this.orders;
  }

  addOrder(order: any) {
    const findOrder = this.orders.find((o) => o.id === order.id);

    if (findOrder !== -1) {
      let order = this.orders[findOrder];

      order.quantity += 1;

      this.orders[findOrder] = order;
    } else {
      this.orders.push(order)
    }
  }

  removeOrder(order: any) {
    const findOrder = this.orders.find((o) => o.id === order.id);

    if (findOrder !== -1) {
      let order = this.orders[findOrder];

      order.quantity -=1;

      if (order.quantity === 0) {
        this.orders = this.orders.map((o) => o.id !== order.id)
      } else {
        this.orders[findOrder] = order;
      }

    } else {
      this.orders.push(order)
    }
  }
}
