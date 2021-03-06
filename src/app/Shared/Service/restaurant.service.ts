import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestaurantDTO } from 'src/app/Models/RestaurantDTO';
import { AddRestaurantComponent } from 'src/app/Components/Restaurants/add-restaurant/add-restaurant.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  public restaurantURL : string;

  constructor(private http: HttpClient) {
    this.restaurantURL = 'http://localhost:8070/restaurants';
   }
   public getAll() :Observable<any>{
    return this.http.get(this.restaurantURL);
  }
  public getCategories():Observable<any>{
    return this.http.get('http://localhost:8070/categories');
  }
  public save(aRestaurantDTO: RestaurantDTO): Observable<any>{
    return this.http.post<RestaurantDTO>(this.restaurantURL, aRestaurantDTO);
  }
  public delete(id: any){
    return this.http.delete(this.restaurantURL+"/"+id)
  }
  public update(id:number,aRestaurantDTO: RestaurantDTO):Observable<any>{
    return this.http.put(this.restaurantURL+"/"+id,aRestaurantDTO);
  }
}
