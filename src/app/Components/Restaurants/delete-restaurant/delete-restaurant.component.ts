import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  @Input() restaurant!: any;
  @Output() deleted = new EventEmitter<boolean>();
  deleteSuccess: boolean = true;

  constructor(private HttpService: RestaurantService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 's' });
  }
  deleteRestaurant(id: any) {
    this.HttpService.delete(id, this.restaurant.restaurantOwner.userDetails.username)
      .subscribe(
        (data) => {
          console.log(data);
          this.deleted.emit(this.deleteSuccess);
        },
        error => {
          console.log(error)
          this.deleteSuccess = false;
        })
  }


}
