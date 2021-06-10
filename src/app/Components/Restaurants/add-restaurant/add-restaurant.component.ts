import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { RestaurantDTO } from 'src/app/Models/restaurant-dto';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent  {

  addRestaurantDTO: RestaurantDTO;
  emailError: boolean = false;
  locationError: boolean = false;
  catOptions: Category[] = [];
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private httpService: RestaurantService) {
          this.addRestaurantDTO = new RestaurantDTO();
  }
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.httpService.getCategories().subscribe(res => {
      this.catOptions = res;
    });
  }
  onSubmit() {
    this.emailError = false;
    this.locationError = false;
    
    this.httpService.save(this.addRestaurantDTO).subscribe(
      (response) => {
        console.log(response);
        this.gotoRestaurantList();},
      (error) => {
        console.log(error)
        if(error.error.message.includes("email")){
          this.emailError = true;}
        if(error.error.message.includes("location")){
          this.locationError = true;}
       });
  }
 
  gotoRestaurantList() {
    this.router.navigate(['crumbs/admin/restaurants/viewRestaurants']);
  }
}
