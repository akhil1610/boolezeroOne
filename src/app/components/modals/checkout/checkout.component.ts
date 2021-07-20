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

  calcTotal() {
    if (this.as.orders.length > 0)
      return this.as.orders.reduce((a, b) => a + ((b.price||0) * (b.count||0)), 0).toFixed(2)

    return 0;
  }

  async goToWhats() {
    const data = {
      id: 1,
      itemNames: this.as.orders.map((order) => order.name).join(","),
      itemPrices: this.as.orders.map((order) => order.price).join(","),
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
