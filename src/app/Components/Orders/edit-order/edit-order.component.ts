import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/Models/Order';
import { OrdersService } from 'src/app/Shared/Service/orders.service';
import { UpdateOrder } from 'src/app/Models/UpdateOrder';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  @Input() order: Order = new Order();
  @Output() fetchOrders: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateOrder: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private orderService: OrdersService
  ) { }

  error = '';
  newOrder: any;
  minDate: string = '';
  maxDate: string = '';

  ngOnInit(): void {

    const minDate = new Date("2021-01-01T24:00")
    const maxDate = new Date();
    maxDate.setMonth(this.order.deliverySlot.getMonth() + 1);
    maxDate.setUTCHours(24, 0, 0);

    this.minDate = minDate.toISOString().split('.')[0].slice(0, -3);
    this.maxDate = maxDate.toISOString().split('.')[0].slice(0, -3);

    const commonValidators: Validators[] = [Validators.required];
    this.newOrder = this.fb.group({
      preferences: [this.order.preferences, [
        Validators.maxLength(250)
      ]],
      deliverySlot: [this.order.isoTime.toISOString().split('.')[0].slice(0, -3)],
      street: [this.order.deliveryLocation.street, [
        ...commonValidators,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
      orderStatus: [this.order.orderStatus],
      phone: [this.order.phone, [
        ...commonValidators,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(10),
        Validators.minLength(10)
      ]]
    })
  }

  get street() {
    return this.newOrder.get("street")
  }
  get phone() {
    return this.newOrder.get("phone")
  }

  openModal(template: any): void {
    this.ngbModal.open(template, { scrollable: true, size: 'l' });
  }

  onSubmit() {
    this.newOrder.value.deliverySlot = new Date(this.newOrder.value.deliverySlot);
    this.newOrder.value.stripeID = this.order.stripeID;
    const order = new UpdateOrder().deserialize(this.newOrder.value);
    this.orderService.updateOrder(order, this.order.id).subscribe(() => {
      this.updateOrder.emit();
      this.ngbModal.dismissAll();
    }, (error) => { this.error = error });
  }
}
