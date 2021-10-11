import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/Order';
import { OrdersService } from 'src/app/Shared/Service/orders.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  totalOrders = 0;
  pageOptions = [2, 5, 10, 15, 20];
  page = 0;
  size = 5;
  filterBy: string ='';
  orderBy: string ='asc';
  sortBy: string ='Id';
  totalPages = 0;
  query: string = '';  

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    const extras = {
      query: this.query,
      filterBy: this.filterBy,
      sortBy: this.sortBy,
      orderBy: this.orderBy
    }

    this.orderService.getOrders(this.page, this.size, extras).subscribe((res: any) => {
      const content = res.content;

      if(content){
        this.orders = content.map((order: Order) => new Order().deserialize(order));
        console.log("Orders fetched: ", this.orders);
        this.totalOrders = res.totalElements;
        this.totalPages = res.totalPages;
        if(this.page > this.totalPages && this.totalPages > 0){
          this.page = this.totalPages;
          this.getOrders();
        }
      }

    })
  }

  newStatusEmitter(input: any){
    this.filterBy = input;
    this.getOrders();
  }

  newSortByEvent(input: any){
    this.sortBy = input;
    this.getOrders();
  }

  newOrderBy(input: any){
    this.orderBy = input;
    this.getOrders();
  }

  returnPageState(val: PageEvent) {
    this.size = val.pageSize;
    this.page = val.pageIndex;
    this.getOrders();
  }

}
