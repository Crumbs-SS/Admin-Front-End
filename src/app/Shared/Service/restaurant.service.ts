import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestaurantDTO } from 'src/app/Models/restaurant-dto';
import { AddRestaurantComponent } from 'src/app/Components/Restaurants/add-restaurant/add-restaurant.component';

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
  public save(aRestaurantDTO: RestaurantDTO){
    return this.http.post<RestaurantDTO>(this.restaurantURL, aRestaurantDTO);
  }
  public delete(id: any){
    return this.http.delete(this.restaurantURL+"/"+id)
  }
  public update(id:number,aRestaurantDTO: RestaurantDTO){
    return this.http.put(this.restaurantURL+"/"+id,aRestaurantDTO);
  }
}
