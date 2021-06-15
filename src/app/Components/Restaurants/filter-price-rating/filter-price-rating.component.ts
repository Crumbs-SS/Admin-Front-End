import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-price-rating',
  templateUrl: './filter-price-rating.component.html',
  styleUrls: ['./filter-price-rating.component.css']
})
export class FilterPriceRatingComponent  {

  @Output() newPriceRatingFilterEvent = new EventEmitter<number>();
  @Output() newRatingFilterEvent = new EventEmitter<number>();
  @Output() newStatusFilterEvent = new EventEmitter<String>();

  returnPriceValue(val:number){
    this.newPriceRatingFilterEvent.emit(val);
  }
  returnRatingValue(val:number){
    this.newRatingFilterEvent.emit(val);
  }
  returnStatusValue(val: String){
    this.newStatusFilterEvent.emit(val);
  }

}
