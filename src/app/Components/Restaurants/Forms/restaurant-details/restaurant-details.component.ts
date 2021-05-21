import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { Output, EventEmitter } from '@angular/core';
import { RestaurantDetail } from 'src/app/Models/RestaurantDetail';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantDetail: RestaurantDetail;
  catOptions: Category[] = 
  [
      {name:"American"},
      {name:"Japanese"},
      {name:"Italian"},
      {name:"Pizza"},
      {name:"Burger"},
      {name:"Sushi"},
      {name:"Fast-Food"},
      {name:"Fine Dining"},
      {name:"Breakfast"},
      {name:"Healthy"}
  ]

  @Output() newItemEvent = new EventEmitter<RestaurantDetail>();

  sendRestaurantDetail(restaurantDetail: RestaurantDetail) {
    this.newItemEvent.emit(restaurantDetail);
  }
  
  constructor() {
      this.restaurantDetail = new RestaurantDetail();
   }


  ngOnInit(): void {
  }
  

}
