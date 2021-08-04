import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'drivernamefilter'
})
export class DriverNamePipe implements PipeTransform {

    transform(value: any[], searchValue: string): any {
        if(!value || !searchValue){
            return value;
        }
        return value.filter(d =>
            d.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
    }

}
