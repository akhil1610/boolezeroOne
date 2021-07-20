import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }


  setActivePref(id) {
    this.activePref = id;
  }

  setActivePrice(id) {
    this.activePrice = id;
  }
}
