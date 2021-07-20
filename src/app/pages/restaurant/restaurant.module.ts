import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';

import { RestaurantPage } from './restaurant.page';

import { SearchComponent } from './../../components/modals/search/search.component'
import { FiltersComponent } from './../../components/modals/filters/filters.component';
import { DeliveryComponent } from './../../components/modals/delivery/delivery.component';
import { MenuComponent } from './../../components/popovers/menu/menu.component';
import { PlateDetailsComponent } from './../../components/modals/plate-details/plate-details.component';
import { CheckoutComponent } from './../../components/modals/checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule
  ],
  declarations: [RestaurantPage, SearchComponent, FiltersComponent, DeliveryComponent, MenuComponent, PlateDetailsComponent, CheckoutComponent]
})
export class RestaurantPageModule {}
