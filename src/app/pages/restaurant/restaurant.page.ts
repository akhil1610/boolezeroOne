import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { FakeDataService } from './../../services/fake-data.service'
import { AccountService } from './../../services/account.service';

import { ModalController, PopoverController } from '@ionic/angular';

import { SearchComponent } from './../../components/modals/search/search.component';
import { FiltersComponent } from './../../components/modals/filters/filters.component';
import { DeliveryComponent } from './../../components/modals/delivery/delivery.component';

import { MenuComponent } from './../../components/popovers/menu/menu.component';
import { PlateDetailsComponent } from './../../components/modals/plate-details/plate-details.component';
import { CheckoutComponent } from './../../components/modals/checkout/checkout.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  public categories: any = [];
  public plates: any = [];
  public platesCopy: any = [];

  public backgroundImage: string ="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  public avatarImage: string ="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  public id: string = null;

  public selectedCategory: number = 1;

  constructor(public fds: FakeDataService, public route: ActivatedRoute, public modalController: ModalController, public popOvercontroller: PopoverController, public as: AccountService) {
    this.id = this.route.snapshot.paramMap.get('id');

    const { categories, plates, avatarImage, backgroundImage } = this.fds.getRestaurant(this.id);

    this.categories = categories;
    this.plates = plates;
    this.platesCopy = this.plates;

    if (avatarImage && backgroundImage) {
      this.avatarImage = avatarImage;
      this.backgroundImage = backgroundImage;
    }
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    const { detail: { value } } = ev;

    this.selectedCategory = value;

    if (value != 1) {
      this.platesCopy = this.plates.filter((plate) => plate.categoryId == this.selectedCategory);
    } else {
      this.platesCopy = this.plates;
    }
  }

  onVegChange(ev: any) {
    const { detail: { checked } } = ev;

    if (checked) {
      this.platesCopy = this.plates.filter((plate) => plate.veggie === true);
    } else {
      this.platesCopy = this.plates;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      componentProps: {
        restaurantId: this.id
      }
    });
    return await modal.present();
  }

  async presentModalFilter() {
    const modal = await this.modalController.create({
      component: FiltersComponent,
      componentProps: {
        restaurantId: this.id
      }
    });
    return await modal.present();
  }

  async presentModalDelivery() {
    const modal = await this.modalController.create({
      component: DeliveryComponent,
      componentProps: {
        restaurantId: this.id
      }
    });
    return await modal.present();
  }

  async openOptions(plate) {
    console.log(plate);


    const modal = await this.modalController.create({
      component: PlateDetailsComponent,
      componentProps: {
        plate
      }
    });
    return await modal.present();
  }

  async settingsPopover(ev: any) {
    const popover = await this.popOvercontroller.create({
      component: MenuComponent,
      event: ev,
      componentProps: {
        options: this.categories
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      this.selectedCategory = result.data.id
    });

    return await popover.present();
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
  }

  async goToPay() {
    const modal = await this.modalController.create({
      component: CheckoutComponent,
      componentProps: {
        restaurantId: this.id
      }
    });
    return await modal.present();
  }
}
