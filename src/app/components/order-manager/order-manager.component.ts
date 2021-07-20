import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.scss'],
})
export class OrderManagerComponent implements OnInit {
  @Input() quantity = 0;
  constructor() { }

  ngOnInit() {}

}
