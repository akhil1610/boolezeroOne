import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';


import { FakeDataService } from './../../../services/fake-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public plates: any = [];
  public platesCopy: any = [];


  @Input() restaurantId: string;

  constructor(private modalCtrl: ModalController, public fds: FakeDataService) { }

  ngOnInit() {
    const { categories, plates, avatarImage, backgroundImage } = this.fds.getRestaurant(this.restaurantId)

    this.plates = plates;
    this.platesCopy = this.plates;
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  search(ev: any) {
    const { detail: { value } } = ev;

    if (value.length === 0) {
      this.platesCopy = this.plates
    } else {
      this.platesCopy = this.plates.filter(it => {
        return it.name.toLocaleLowerCase().includes(value);
      });
    }
  }
  addToOrder(plate: any) {
    plate.count += 1;
  }

  add(plate: any) {
    plate.count += 1;
  }

  remove(plate: any) {
    plate.count -= 1;
  }
}
