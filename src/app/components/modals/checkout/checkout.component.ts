import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import {  ModalController, LoadingController } from '@ionic/angular';
import { AccountService } from './../../../services/account.service';

import { Browser } from '@capacitor/browser';

// import { Geolocation } from '@capacitor/geolocation'

declare var google;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public orders: any = [];
  public address: string = "";
  public userName: string = "";

  @Input() adressType: string;
  @Input() phoneNumber: string;
  @Input() deliveryFee: any = 0;

  @ViewChild('addressText', {static: false}) addresstext: ElementRef;

  @Output() setAddress: EventEmitter<any> = new EventEmitter();

  constructor(private modalCtrl: ModalController, public as: AccountService, public loadingController: LoadingController) {
  }

  ngOnInit() {
    this.orders = this.as.orders;

    this.deliveryFee = parseFloat(this.deliveryFee);

//     this.getCurrentLocation();
  }

//   ionViewDidEnter() {
//     this.getPlaceAutocomplete();
//   }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  calcTotal() {
    if (this.as.orders.length > 0)
      return parseFloat(this.as.orders.reduce((a, b) => a + ((b.price||0) * (b.count||0)), 0).toFixed(2))

    return 0;
  }

  async goToWhats() {
    const data = {
      id: Math.round(Math.random() * 1000),
      itemNames: this.as.orders.map((order) => order.name).join(","),
      itemPrices: this.as.orders.map((order) => order.price).join(","),
      toPay: (this.calcTotal() + this.deliveryFee).toFixed(2),
      CName: this.userName,
      CAddress: this.address,
      deliveryOpt: 'Delivery'
    };

  const url = `https://wa.me/${this.phoneNumber}?text=
    %0aOrder No:%20 ${data.id}%0a
    ${data.CName}, Would like to order the following:%0a
    -------------------------------%0a

    ${this.setUrl()}%0a
    Total Amount:%20RM ${data.toPay}%0a`;

    await Browser.open({ url });
  }
  // Add it below name
  // Address:%20  ${data.CAddress || `N/A`}%0a
//   Delivery Type:%20${this.as.activeDelivery.label}%0a

  setUrl() {
    let res = ``;

    this.as.orders.forEach((order) => {
      res += (`%0aItem name: %20${order.count} x ${order.name}%0aItem Price Amount: RM ${order.price}%0a`)
    });

    return res;
  }

//   async getCurrentLocation() {
//     if (this.as.activeDelivery.id !== 1)
//       return;

//     const loading = await this.loadingController.create({
//       message: 'Please wait...',
//     });

//     await loading.present();

//     try {
//       const { coords } = await Geolocation.getCurrentPosition();
//       const geocoder = new google.maps.Geocoder();

//       geocoder.geocode({ location: { lat: coords.latitude, lng: coords.longitude } }).then(({results}) => {
//         this.address = results[0].formatted_address;
//       });

//       loading.dismiss();
//     } catch (error) {
//       loading.dismiss();
//       alert('Error while getting current Location, check your configuration');
//     }
//   }

//   getPlaceAutocomplete() {
//     if (this.as.activeDelivery.id !== 1)
//       return;

//     const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
//       {
//         types: ['address']  // 'establishment' / 'address' / 'geocode'
//       });
//     google.maps.event.addListener(autocomplete, 'place_changed', () => {
//         const place = autocomplete.getPlace();
//         this.invokeEvent(place);
//     });
//   }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
