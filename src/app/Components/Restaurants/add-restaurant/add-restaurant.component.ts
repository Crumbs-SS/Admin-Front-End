import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { AddRestaurantDTO } from 'src/app/Models/add-restaurant-dto';
import { userDetail } from 'src/app/Models/UserDetail';
import { Category } from 'src/app/Models/Category';
import { RestaurantLocation } from 'src/app/Models/Location';
import { RestaurantDetailsComponent } from '../Forms/restaurant-details/restaurant-details.component';
import { RestaurantDetail } from 'src/app/Models/RestaurantDetail';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent  {

  addRestaurantDTO: AddRestaurantDTO;
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private httpService: RestaurantService) {
          this.addRestaurantDTO = new AddRestaurantDTO();
  }
  
  onSubmit() {
    this.httpService.save(this.addRestaurantDTO).subscribe(
      (result) => {this.gotoRestaurantList();},
      (error) => {
        console.log(error)
      alert(error.error.message)}
      );
  }
 
  gotoRestaurantList() {
    this.router.navigate(['crumbs/admin/restaurants/rudRestaurants']);
  }
  sendUserDetail(user:userDetail){
      this.addRestaurantDTO.firstName= user.firstName;
      this.addRestaurantDTO.lastName= user.lastName;
      this.addRestaurantDTO.email= user.email;
  }
  sendLocation(location:RestaurantLocation){
    this.addRestaurantDTO.street= location.street;
    this.addRestaurantDTO.city= location.city;
    this.addRestaurantDTO.zip= location.zip;
    this.addRestaurantDTO.state= location.state;
}
sendRestaurantDetail(restaurantDetail: RestaurantDetail){
  this.addRestaurantDTO.name = restaurantDetail.name;
  this.addRestaurantDTO.priceRating = restaurantDetail.priceRating;
  this.addRestaurantDTO.categories = restaurantDetail.categories;
}

}
