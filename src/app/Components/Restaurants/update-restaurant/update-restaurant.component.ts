import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantDTO } from 'src/app/Models/restaurant-dto';
import { Category } from 'src/app/Models/Category';
import { RestaurantLocation } from 'src/app/Models/Location';
import { Restaurant } from 'src/app/Models/Restaurant';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent{

  @Input() restaurant!: any;
  submitted:boolean = true;
  restaurantDTO: RestaurantDTO;
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
  
  constructor(private route: ActivatedRoute, private router: Router,
    private HttpService: RestaurantService, private modalService: NgbModal) {
    this.restaurantDTO = new RestaurantDTO();
   }
   @Output() newItemEvent = new EventEmitter<RestaurantDTO>();

  sendDTO(restaurantDTO: RestaurantDTO) {
    this.newItemEvent.emit(restaurantDTO);
  }
  onViewChanges(){
    this.submitted = false;
  }
  onUpdate() {
    this.HttpService.update(this.restaurant.id, this.restaurantDTO).subscribe(
      (response) => { 
        console.log(response);
        alert("Update Successful"); },
      (error) => {
        console.log(error)
        alert(error.error.message)
      },
    );
  }
  openUpdate(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }
  reloadCurrentPage() {
    window.location.reload();
  }


}
