import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AccountService } from './../../../services/account.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  public orderActiveType: any = 0;
  public orderActiveTime: any = 0;


  public orderType: any = [
    { label: "Delivery", id: 1, iconName: "location-outline" },
    { label: "Dining", id: 2, iconName: "fast-food-outline" },
    { label: "Pickup", id: 3, iconName: "cube-outline" },
  ]

  public orderTime: any =[
    { label: "ASAP", id: 1,  iconName: "restaurant-outline"},
    { label: "Custom Date Time", id: 2, iconName: "calendar-outline" },
  ]

  constructor(private modalCtrl: ModalController, public as: AccountService) { }

  ngOnInit() {
    this.orderActiveTime = this.as.activeOrderType.id || 0;
    this.orderActiveType = this.as.activeDelivery.id || 0;
  }


  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  setActiveOrderType(order) {
    this.orderActiveType = order.id;
    this.as.activeDelivery = order;
  }

  setActiveOrderTime(order) {
    this.orderActiveTime = order.id;
    this.as.activeOrderType = order;
  }
}
