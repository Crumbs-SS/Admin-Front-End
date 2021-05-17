import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private HttpService: RestaurantService) { }

  restaurants: any;
  totalRestaurants = 0;

  ngOnInit()  {
    this.loadAllRestaurants();
  }

  loadAllRestaurants(){
    this.HttpService.getAll().subscribe((res) => {
      this.restaurants = res;
      this.totalRestaurants = this.restaurants.length;

    });
  }

}
