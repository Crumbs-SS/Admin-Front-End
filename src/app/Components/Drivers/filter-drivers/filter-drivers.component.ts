import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-drivers',
  templateUrl: './filter-drivers.component.html',
  styleUrls: ['./filter-drivers.component.css']
})
export class FilterDriversComponent {

  @Output() newStatusFilterEvent = new EventEmitter<string>();

  returnStatusValue(val: string) {
    this.newStatusFilterEvent.emit(val);
  }
}
