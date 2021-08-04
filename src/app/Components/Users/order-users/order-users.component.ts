import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-users',
  templateUrl: './order-users.component.html',
  styleUrls: ['./order-users.component.css']
})
export class OrderUsersComponent {

  @Output() newOrderEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  newOrder(order: string){
    this.newOrderEvent.emit(order);
  }
}
