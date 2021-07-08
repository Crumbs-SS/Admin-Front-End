import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestaurantDTO } from 'src/app/Models/RestaurantDTO';
import { AddRestaurantComponent } from 'src/app/Components/Restaurants/add-restaurant/add-restaurant.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public restaurantURL : string;

  constructor(private http: HttpClient) {
    this.restaurantURL = 'http://localhost:8080';
   }
   public registerOwner(OwnerRegistration : any) :Observable<any>{
    return this.http.post(this.restaurantURL + "/owners/register",OwnerRegistration );
  }
  public ownerExists(username: string){
      return this.http.get(this.restaurantURL + '/owners/' + username);
  }
  
}