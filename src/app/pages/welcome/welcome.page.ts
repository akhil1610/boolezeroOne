import { Component, OnInit } from '@angular/core';
import { FakeDataService } from './../../services/fake-data.service';
import { AccountService } from './../../services/account.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  public restaurants: any[]  = [];

  public searchText: string = "";

  constructor(private navCtrl: NavController, public fds: FakeDataService, public as:AccountService) {
    const restaurants = this.fds.getData();

    this.restaurants = restaurants as any;
  }

  ngOnInit() {
  }

  goToRestaurant(restaurantId: number) {
    this.as.activeDelivery = {label: "Delivery", id: 1, iconName: "location-outline"};
    this.navCtrl.navigateForward('/restaurants/' + restaurantId);
  }
}
