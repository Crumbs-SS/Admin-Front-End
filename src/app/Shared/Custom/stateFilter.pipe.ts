import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statefilter'
})
export class StateFilterPipe implements PipeTransform {

    transform(value: any[], stateValue: String): any {
        if(!value || !stateValue){
            return value;
        }
        return value.filter( d => d.state == stateValue);
    }
}
