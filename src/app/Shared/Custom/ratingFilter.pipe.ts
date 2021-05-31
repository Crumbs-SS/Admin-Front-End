import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingfilter'
})
export class RatingFilterPipe implements PipeTransform {

  transform(value: any[], ratingValue: number): any {
    if(!value || !ratingValue){
      return value;
    }
    return value.filter( r => r.rating == ratingValue);
   
  }

}