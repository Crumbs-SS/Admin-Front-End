import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/Shared/Service/orders.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Order } from 'src/app/Models/Order';
import { AccountService } from 'src/app/Shared/Service/account.service';
import { PageEvent } from '@angular/material/paginator';
import { faStar as WholeStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as BlankStar } from '@fortawesome/free-regular-svg-icons';

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
  ) {
    this.formGroup = fb.group({ query: "" });
  }

  formGroup: FormGroup;
  drivers: any[] = [];
  selectedDrivers: string[] = [];
  error: string = '';
  usernameFormGroup: any;
  allSelected: boolean = false;

  // Pagination
  totalDrivers: number = 0;
  pageOptions: number[] = [5, 10, 15, 20];
  page: number = 0;
  size: number = 5;
  filterBy: string = '';
  orderBy: string = 'asc';
  sortBy: string = 'Id';
  totalPages: number = 0;

  ngOnInit(): void { this.getDrivers(); }


  getDrivers() {
    const extras = {
      query: this.formGroup.value.query,
      filterBy: this.filterBy,
      sortBy: this.sortBy,
      orderBy: this.orderBy
    }

    this.accountService.getAvailableDrivers(this.page, this.size, extras).subscribe((driverPage: any) => {
      this.totalDrivers = driverPage.totalElements;
      this.totalPages = driverPage.totalPages;
      this.drivers = driverPage.content;

      this.drivers.forEach((driver: any) => this.getDriverRating(driver));
    });
  }

  onAssign() {
    this.error = '';
    this.selectedDrivers.forEach(username => this.requestDriver(username));
  }

  requestDriver(username: string) {
    this.userService.checkIfDriverIsAvailable(username).subscribe(data => {
      if (data) {
        this.orderService.sendOrderRequestToDriver(this.order.id, parseInt(data.toString()))
          .subscribe(() => this.ngbModal.dismissAll(), (e) => {
            this.error = "An error has occurred please try again later."; console.error(e);
          });
      } else {
        this.error = "Driver: " + username + "isn't available."
      }
    }, (error) => {
      console.error(error);
      this.error = (error.status === 404) ? "Driver: " + username + " doesn't exist."
        : "An error has occurred please try again later."
    })
  }

  open(modal: any) {
    this.ngbModal.open(modal, modalOptions)
  }

  returnPageState(val: PageEvent) {
    this.size = val.pageSize;
    this.page = val.pageIndex;
    this.getDrivers();
  }

  onClick(driver: any) {
    this.selectedDrivers = this.isDriverSelected(driver) ?
      [...this.selectedDrivers.filter(driverUsername => driverUsername !== driver.userDetails.username)] :
      [...this.selectedDrivers, driver.userDetails.username];
  }

  isDriverSelected(driver: any) {
    return this.selectedDrivers.find(driverUsername => driverUsername === driver.userDetails.username);
  }

  selectAllDrivers() {
    const extras = { query: "", filterBy: "", sortBy: this.sortBy, orderBy: this.orderBy }
    this.accountService.getAvailableDrivers(0, 100, extras).subscribe((driverPage: any) => {
      this.selectedDrivers = driverPage.content.map((driver: any) => driver.userDetails.username);
    });
  }

  onSelectChange(selected: boolean) {
    this.allSelected = selected;
    if (selected) {
      this.selectAllDrivers();
    } else {
      this.selectedDrivers = [];
    }
  }

  getDriverRating(driver: any): void {
    const username: string = driver.userDetails.username;
    driver.driverRating = [];

    this.userService.getDriverRating(username).subscribe((averageRating: number) => {
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          driver.driverRating.push(WholeStar);
        } else if (i <= averageRating + 0.5) {
          driver.driverRating.push(faStarHalfAlt);
        } else {
          driver.driverRating.push(BlankStar);
        }
      }
    }, (e) => {
      for (let i = 1; i <= 5; i++) {
        driver.driverRating.push(BlankStar);
      }
      console.error(e);
    });
  }

  get query() {
    return this.formGroup.get('query');
  }

  set query(value: any) {
    this.formGroup.setValue({ query: value })
  }
}