import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountService } from './../../../services/account.service';

import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public orders: any = [];
  public address: string = "";
  constructor(private modalCtrl: ModalController, public as: AccountService) { }

  ngOnInit() {
    this.orders = this.as.orders;
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  addToOrder(plate: any) {
    plate.count += 1;
    this.addToOrderService(plate);
  }

  add(plate: any) {
    plate.count += 1;
    this.addToOrderService(plate);
  }

  remove(plate: any) {
    plate.count -= 1;

    this.addToOrderService(plate);
  }

  addToOrderService(plate: any) {
    const index = this.as.orders.findIndex((pl) => pl.id === plate.id);

    if (index === -1) {
      this.as.orders.push(plate);
    } else {

      if (plate.count === 0) {
        this.as.orders.splice(index, 1);
        return;
      }

      this.as.orders.splice(index, 1, plate);
    }

    this.calcTotal();
  }

  calcTotal() {
    if (this.as.orders.length > 1)
      return this.as.orders.reduce((a, b) => a + ((b.price||0) * (b.count||0)), 0)

    return this.as.orders[0].count * this.as.orders[0].price;
  }


  async goToWhats() {
    const data = {
      id: 1,
      itemNames: this.as.orders.map((order) => order.name).join(","),
      itemPrices: this.as.orders.map((order) => order.prices).join(","),
      toPay: this.calcTotal(),
      CName: '123123',
      CAddress: this.address,
      deliveryOpt: 'Delivery'
    };

    const url = `https://wa.me/60173934825?text=
    %0aOrder No:%20 ${data.id}%0a
      Name:%20 ${data.CName}%0a
      Address:%20  ${data.CAddress}%0a
      Delivery Type:%20${this.as.activeDelivery.label}%0a
      Item Name:%20  ${data.itemNames}%0a
      Item Price:%20  ${data.itemPrices}%0a
      Total Amount:%20  ${data.toPay}%0a`;

    await Browser.open({ url });
  }
}
