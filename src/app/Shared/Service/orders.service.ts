import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateOrder } from 'src/app/Models/UpdateOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public rootUrl: string = 'http://localhost:8010'

  constructor(private httpClient: HttpClient) { }

  public getOrders(page: number, size: number,{ query='', filterBy='', orderBy='', sortBy='' }){

    return this.httpClient.get(this.rootUrl + 
      `/orders?page=${page}&size=${size}&query=${query}&filterBy=${filterBy}&sortBy=${sortBy}&orderBy=${orderBy}`);
  }

  public updateOrder(order: UpdateOrder, id: number){
    return this.httpClient.put(this.rootUrl+`/orders/${id}`, order);
  }

}