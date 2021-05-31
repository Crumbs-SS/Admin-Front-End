import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { restaurantOwner } from 'src/app/Models/RestaurantOwner';
import { SortPipe } from 'src/app/Shared/Custom/sort.pipe';

@Component({
  selector: 'app-filter-price-rating',
  templateUrl: './filter-price-rating.component.html',
  styleUrls: ['./filter-price-rating.component.css']
})
export class FilterPriceRatingComponent  {

  @Output() newFilterEvent = new EventEmitter<number>();

  returnPriceValue(val:number){
    this.newFilterEvent.emit(val);
  }
  returnRatingValue(val:number){
    this.newFilterEvent.emit(val);
  }

}
