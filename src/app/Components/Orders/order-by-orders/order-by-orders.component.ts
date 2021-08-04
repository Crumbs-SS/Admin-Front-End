import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-by-orders',
  templateUrl: './order-by-orders.component.html',
  styleUrls: ['./order-by-orders.component.css']
})
export class OrderByOrdersComponent {

  @Output() orderByEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  newOrderBy(input: any){
    this.orderByEmitter.emit(input);
  }

}
