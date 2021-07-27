import { Component, OnInit } from '@angular/core';
import { FakeDataService } from './../../services/fake-data.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class clientsPage implements OnInit {
  public restaurants: any[]  = [];

  public searchText: string = "";

  constructor(private navCtrl: NavController, public fds: FakeDataService) {
    const restaurants = this.fds.getData();

    this.restaurants = restaurants as any;
  }

  ngOnInit() {
  }

  goToRestaurant(restaurantId: number) {
    this.navCtrl.navigateForward('/onlinestore/' + restaurantId);
  }
}
