import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateOrder } from 'src/app/Models/UpdateOrder';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import { ORDER_SERVICE_URL, EMAIL_SERVICE_URL } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public rootUrl: string = ORDER_SERVICE_URL;
  public snsUrl: string = EMAIL_SERVICE_URL;
  private token: any;
  private opts: object;

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
    this.token = this.authenticationService.tokenValue;
    this.opts = {headers: new HttpHeaders().set('Authorization', this.token)};
  }

  public getOrders(page: number, size: number,{ query='', filterBy='', orderBy='', sortBy='' }){

    return this.httpClient.get(this.rootUrl + 
      `/orders?page=${page}&size=${size}&query=${query}&filterBy=${filterBy}&sortBy=${sortBy}&orderBy=${orderBy}`, this.opts);
  }

  public updateOrder(order: UpdateOrder, id: number){
    return this.httpClient.put(this.rootUrl+`/orders/${id}`, order, this.opts);
  }

  public deleteOrder(id: number){    
    return this.httpClient.delete(this.rootUrl + `/orders/${id}`, this.opts);
  }

  public sendOrderRequestToDriver(orderId: number, driverId: number){
    return this.httpClient.post(this.snsUrl + `/orders/${orderId}/drivers/${driverId}`, {}, this.opts);
  }

}
