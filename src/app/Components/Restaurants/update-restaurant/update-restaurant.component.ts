import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantDTO } from 'src/app/Models/RestaurantDTO';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit{

  @Input() restaurant!: any;
  @Output() updated = new EventEmitter<boolean>();
  updateStatus: number = 1;
  restaurantDTO: RestaurantDTO;
  emailError: boolean = false;
  locationError: boolean = false;
  catOptions: Category[] = [];
  
  constructor(private route: ActivatedRoute, private router: Router,
    private HttpService: RestaurantService, private modalService: NgbModal) {
    this.restaurantDTO = new RestaurantDTO();
   }
   ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.HttpService.getCategories().subscribe(res => {
      this.catOptions = res;
    });
  }
  onViewChanges(){
    this.updateStatus = 2;
  }
  onUpdate() {
    this.emailError = false;
    this.locationError = false;
    
    this.HttpService.update(this.restaurant.id, this.restaurantDTO).subscribe(
      (response) => { 
        console.log(response);
        this.updated.emit()
        this.updateStatus=3;
      },
      (error) => {
        console.log(error)
        if(error.error.message.includes("email")){
          this.emailError = true;}
        if(error.error.message.includes("location")){
          this.locationError = true;}
        this.updateStatus=2;
      },
    );
  }
  openUpdate(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }


}
