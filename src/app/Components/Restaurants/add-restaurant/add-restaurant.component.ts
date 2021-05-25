import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { RestaurantDTO } from 'src/app/Models/restaurant-dto';
import { userDetail } from 'src/app/Models/UserDetail';
import { Category } from 'src/app/Models/Category';
import { RestaurantLocation } from 'src/app/Models/Location';
import { RestaurantDetail } from 'src/app/Models/RestaurantDetail';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent  {

  addRestaurantDTO: RestaurantDTO;
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
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private httpService: RestaurantService) {
          this.addRestaurantDTO = new RestaurantDTO();
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
    this.router.navigate(['crumbs/admin/restaurants/viewRestaurants']);
  }
}
