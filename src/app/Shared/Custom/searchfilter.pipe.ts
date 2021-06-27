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
      restaurant.location.street.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      restaurant.location.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      restaurant.location.state.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      restaurant.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      restaurant.restaurantOwner.userDetails.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase)||
      restaurant.restaurantOwner.userDetails.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase)
      );
  }

}
