import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { AddRestaurantDTO } from 'src/app/Models/add-restaurant-dto';
import { Category } from 'src/app/Models/category';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent  {

  addRestaurantDTO: AddRestaurantDTO;
  catOptions: Category[];

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private httpService: RestaurantService) {
    this.addRestaurantDTO = new AddRestaurantDTO();
    this.catOptions = [
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

}
