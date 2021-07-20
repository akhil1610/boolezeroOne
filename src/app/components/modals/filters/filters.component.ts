import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AccountService } from './../../../services/account.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public activePref: number = 0;
  public activePrice: number = 0;

  public preferences: any = [
    { label: "Veg", id: 1 },
    { label: "Non Veg", id: 2 },
    { label: "Kosher", id: 3 },
    { label: "Gluten Free", id: 4 },
    { label: "available", id:5 }
  ]

  public prices: any =[
    { label: "< MYR 5", id: 1 },
    { label: "< MYR 10", id: 2 },
    { label: "< MYR 15", id: 3 },
    { label: "< MYR 20", id: 4 },
    { label: "< MYR 30", id: 5 }
  ]

  public activeFilter: any = {
    price: null,
    preference: null
  };

  constructor(private modalCtrl: ModalController, public as: AccountService) { }

  ngOnInit() {
    this.activePref = this.as.activePreferenceFilter || 0;
    this.activePrice = this.as.activePriceFilter || 0;

    this.activeFilter = {
      price: this.as.activePriceFilter || 0,
      preference: this.as.activePreferenceFilter || 0
    }
  }

  async dismiss() {
    await this.modalCtrl.dismiss(this.activeFilter);
  }

  setActivePref(id) {
    this.as.activePreferenceFilter = id;
    this.activePref = id;
    this.activeFilter.preference = id;
  }

  setActivePrice(id) {
    this.as.activePriceFilter = id;
    this.activePrice = id;

    this.activeFilter.price = id;
  }

  clearPrice() {
    this.as.activePriceFilter = 0;
    this.activePrice = 0;

    this.activeFilter.price = 0;
  }

  clearPreference() {
    this.as.activePreferenceFilter = 0;
    this.activePref = 0;
    this.activeFilter.preference = 0;
  }
}
