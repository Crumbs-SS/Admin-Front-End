import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-rud-restaurants',
  templateUrl: './rud-restaurants.component.html',
  styleUrls: ['./rud-restaurants.component.css']
})
export class RudRestaurantsComponent implements OnInit{

  catOptions: Category[];

  constructor(private route: ActivatedRoute, private router: Router, 
    private HttpService: RestaurantService, private modalService: NgbModal) { 
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
    
  restaurants: any;
  totalRestaurants = 0;
  searchString!: string;
  restaurant:any;

  ngOnInit()  {
    this.loadAllRestaurants();
  }

  loadAllRestaurants(){
    this.HttpService.getAll().subscribe((res) => {
      this.restaurants = res;
      this.totalRestaurants = this.restaurants.length;

    });
  }
  searchRestaurants(){}
  
  deleteRestaurant(id: any){
    this.HttpService.delete(id).subscribe(
      (response) => {alert("Delete Successfull");}, 
      (error) => {
        console.log(error)
      alert(error.error.message)},
      );
  }

  open(longContent: any) {
    this.modalService.open(longContent, { scrollable: true , size: 'xl'});
  }
  openUpdate( longContent: any, restaurant: any) {
    this.restaurant = restaurant;
    this.modalService.open(longContent, { scrollable: true , size: 'xl'});
  }
  reloadCurrentPage() {
    window.location.reload();
   }

   onSubmit(){
     this.HttpService.update(this.restaurant).subscribe(
      (response) => {alert("Update Successfull");}, 
      (error) => {
        console.log(error)
      alert(error.error.message)},
     );
   }
  
}
 
//   updateRestaurantForm!: FormGroup;
// initializeForms(){
//   this.updateRestaurantForm = new FormGroup({
//     name: new FormControl('', [Validators.required]),
//     priceRating: new FormControl('', [Validators.required]),
//     rating: new FormControl('')
//   })
   
// }
// openContent(longContent: any, obj: any) {
//     if(obj!=null){
//       this.updateRestaurantForm = this.fb.group({
//         name : obj.name,
//         rating: obj.rating,
//         priceRating: obj.priceRating


//       })
//     }
//     this.modalService.open(longContent, { scrollable: true , size: 'xxl'});
//   }