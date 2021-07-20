import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-plate-details',
  templateUrl: './plate-details.component.html',
  styleUrls: ['./plate-details.component.scss'],
})
export class PlateDetailsComponent implements OnInit {
  @Input() plate: any = {};

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() { }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
