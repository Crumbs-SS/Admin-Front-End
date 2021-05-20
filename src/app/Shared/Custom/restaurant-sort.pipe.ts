import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantSort'
})
export class RestaurantSortPipe implements PipeTransform {

  transform(input: any[]): any {
    if(input){
      return input.sort((a,b) => {
        let o1: string = a.location.city;
        let o2: string = b.location.city;
        return o1 > o2 ? 1 : o1 < o2 ? -1 :0;
      }); 
    }
  }

}


