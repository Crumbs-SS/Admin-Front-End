import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddRestaurantDTO } from 'src/app/models/add-restaurant-dto';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantURL : string;

  constructor(private http: HttpClient) {
    this.restaurantURL = 'http://localhost:8080/restaurants';
   }
   public getAll() {
    return this.http.get(this.restaurantURL);
  }
  public save(aRestaurantDTO: AddRestaurantDTO){
    return this.http.post<AddRestaurantDTO>(this.restaurantURL, aRestaurantDTO);
  }
}
