import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestaurantDTO } from 'src/app/Models/RestaurantDTO';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { RESTAURANT_SERVICE_URL } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  public restaurantURL: string;
  private token: any;
  private opts: object;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.restaurantURL = RESTAURANT_SERVICE_URL;
    this.token = this.authenticationService.tokenValue;
    this.opts = { headers: new HttpHeaders().set('Authorization', this.token) };
  }
  public getAll(): Observable<any> {
    return this.http.get(this.restaurantURL + '/restaurants', this.opts);
  }
  public getCategories(): Observable<any> {
    return this.http.get(this.restaurantURL + '/categories');
  }
  public save(aRestaurantDTO: RestaurantDTO): Observable<any> {
    return this.http.post<RestaurantDTO>(this.restaurantURL + '/owner/' + aRestaurantDTO.username + '/restaurant', aRestaurantDTO, this.opts);
  }

  public delete(id: any, username: string) {
    return this.http.delete(this.restaurantURL + '/owner/' + username + '/restaurant/' + id, this.opts);
  }
  public update(id: number, username: string, aRestaurantDTO: RestaurantDTO): Observable<any> {
    return this.http.put(this.restaurantURL + '/owner/' + username + '/restaurant/' + id, aRestaurantDTO, this.opts);
  }
}
