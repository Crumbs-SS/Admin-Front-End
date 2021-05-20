import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddRestaurantDTO } from 'src/app/Models/add-restaurant-dto';
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
  public save(aRestaurantDTO: AddRestaurantDTO){
    return this.http.post<AddRestaurantDTO>(this.restaurantURL, aRestaurantDTO);
  }
  public delete(id: any){
    return this.http.delete(this.restaurantURL+"/"+id)
    // {responseType: 'text'}
  }
  public update(aRestaurantDTO: any){
    return this.http.put(this.restaurantURL,aRestaurantDTO);
  }
}
