import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/Models/Order';
import { OrdersService } from 'src/app/Shared/Service/orders.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent {

  @Input() order: Order = new Order();
  @Output() deleteOrder: EventEmitter<void> = new EventEmitter<void>();
  constructor(private orderService: OrdersService, private ngbModal: NgbModal) { }

  open(template: any){
    this.ngbModal.open(template);
  }

  onDeleteOrder(){
    this.ngbModal.dismissAll();
    this.orderService.deleteOrder(this.order.id).subscribe(
      () => this.deleteOrder.emit(), console.log)
  }

}
