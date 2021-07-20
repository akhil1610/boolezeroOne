import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() options: any;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}


  async dismiss(option) {
    await this.popoverController.dismiss(option);
  }
}
