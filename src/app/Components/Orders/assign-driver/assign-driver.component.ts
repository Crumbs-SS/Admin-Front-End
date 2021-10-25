import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/Shared/Service/orders.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Order } from 'src/app/Models/Order';
import { AccountService } from 'src/app/Shared/Service/account.service';


const modalOptions: NgbModalOptions = {
  animation: true,
  centered: true,
  size: 'lg'
}

@Component({
  selector: 'app-assign-driver',
  templateUrl: './assign-driver.component.html',
  styleUrls: ['./assign-driver.component.css']
})
export class AssignDriverComponent implements OnInit {

  @Input() order: Order = new Order();
  @Output() assignDriverToOrderEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private orderService: OrdersService,
    private userService: UserService,
    private accountService: AccountService
  ) { }

  drivers: any;
  error = '';
  usernameFormGroup: any;

  ngOnInit(): void {
    this.accountService.getAvailableDrivers(0, 5, {}).subscribe((drivers: any) => this.drivers = drivers.content);
  }

  onAssign() {
    this.error = '';
    const username = this.usernameFormGroup.get('username').value;

    this.userService.checkIfDriverIsAvailable(username).subscribe((data) => {
      if (data) {
        this.orderService.sendOrderRequestToDriver(this.order.id, parseInt(data.toString()))
          .subscribe(() => this.ngbModal.dismissAll(), () =>
            this.error = "An error has occurred please try again later.");
      } else {
        this.error = "This driver isn't available."
      }
    }, (error) => {
      console.error(error.message);
      this.error = (error.status === 404) ? "This driver doesn't exist."
        : "An error has occurred please try again later."
    })
  }

  open(modal: any) {
    this.ngbModal.open(modal, modalOptions)
  }

  get username() {
    return this.usernameFormGroup.get("username");
  }

}
