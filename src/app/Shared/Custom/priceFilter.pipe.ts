import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any[], priceValue: number): any {
    if(!value || !priceValue){
      return value;
    }
    return value.filter( (r: { priceRating: number; }) => r.priceRating == priceValue);
   
  }

}
