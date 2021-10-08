import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateOrder } from 'src/app/Models/UpdateOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public rootUrl: string = 'application-load-balancer-2004143484.us-east-1.elb.amazonaws.com/order-service';
  public snsUrl: string = 'application-load-balancer-2004143484.us-east-1.elb.amazonaws.com/email-service';

  constructor(private httpClient: HttpClient) { }

  public getOrders(page: number, size: number,{ query='', filterBy='', orderBy='', sortBy='' }){

    return this.httpClient.get(this.rootUrl + 
      `/orders?page=${page}&size=${size}&query=${query}&filterBy=${filterBy}&sortBy=${sortBy}&orderBy=${orderBy}`);
  }

  public updateOrder(order: UpdateOrder, id: number){
    return this.httpClient.put(this.rootUrl+`/orders/${id}`, order);
  }

  public deleteOrder(id: number){    
    return this.httpClient.delete(this.rootUrl + `/orders/${id}`);
  }

  public sendOrderRequestToDriver(orderId: number, driverId: number){
    return this.httpClient.post(this.snsUrl + `/orders/${orderId}/drivers/${driverId}`, {});
  }

}