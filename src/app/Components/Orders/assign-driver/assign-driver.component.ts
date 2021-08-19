import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/Shared/Service/orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Order } from 'src/app/Models/Order';
import { StatusFilterPipe } from 'src/app/Shared/Custom/statusFilter.pipe';

@Component({
  selector: 'app-assign-driver',
  templateUrl: './assign-driver.component.html',
  styleUrls: ['./assign-driver.component.css']
})
export class AssignDriverComponent  implements OnInit{

  @Input() order: Order = new Order();
  @Output() assignDriverToOrderEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private ngbModal: NgbModal, 
    private fb: FormBuilder,
    private orderService: OrdersService,
    private userService: UserService
  ) { }
  
  error = '';
  usernameFormGroup: any;

  ngOnInit(): void {
    this.usernameFormGroup = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9]*$"),
        Validators.maxLength(25),
        Validators.minLength(3),
      ]]
    })
  }

  onAssign(){
    this.error = '';
    const username = this.usernameFormGroup.get('username').value;
    this.userService.checkIfDriverIsAvailable(username).subscribe((data) => {      
      if(data){
        this.orderService.sendOrderRequestToDriver(this.order.id, parseInt(data.toString()))
        .subscribe(() => {
          this.ngbModal.dismissAll();
        }, () => {
          this.error = "An error has occurred please try again later."
        });
      }else{
        this.error = "This driver isn't available."
      }
    }, (error) => {
        this.error = (error.status === 404) ? "This driver doesn't exist." 
        : "An error has occurred please try again later.";
    })

  }

  open(modal: any){
    this.ngbModal.open(modal)
  }

  get username(){
    return this.usernameFormGroup.get("username");
  }

}
