import { Component, OnInit, Input } from '@angular/core';

import { AccountService } from './../../../services/account.service';


@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() plate: any = {};
  constructor(public as: AccountService) { }

  ngOnInit() { }


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

}
