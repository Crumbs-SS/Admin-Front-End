import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], searchValue: string): any {
    if(!value || !searchValue){
      return value;
    }
    return value.filter(restaurant =>
      restaurant.location.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      restaurant.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      restaurant.restaurantOwner.userDetail.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase)||
      restaurant.restaurantOwner.userDetail.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase)||
      restaurant.location.state.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}

// transform(input: any[]): any {
//   if(input){
//     return input.sort((a,b) => {
//       let o1: string = a.location.city;
//       let o2: string = b.location.city;
//       return o1 > o2 ? 1 : o1 < o2 ? -1 :0;
//     }); 
//   }