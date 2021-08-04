import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusfilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(value: any[], statusValue: String): any {
    if(!value || !statusValue){
      return value;
    }
    return value.filter( r=> r.restaurantStatus.status == statusValue);
   
  }
}
