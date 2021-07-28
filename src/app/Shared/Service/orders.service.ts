import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public rootUrl: string = 'http://localhost:8010'

  constructor(private httpClient: HttpClient) { }

  public getOrders(page: number, size: number, extras: any){
    return this.httpClient.get(this.rootUrl + 
      `/orders?page=${page}&size=${size}&query=${extras.query}&filterBy=${extras.filterBy}`);
  }
}