import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'priceSort'
})
export class PriceRatingSortPipe implements PipeTransform{

  transform(input: any[]): any {
    if(input){
      return input.sort((a,b) => {
        let o1: string = a.priceRating;
        let o2: string = b.priceRating;
        return o1 > o2 ? 1 : o1 < o2 ? -1 :0;
      }); 
    }
  }
}

