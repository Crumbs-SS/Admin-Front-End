import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {
  
  @Input() restaurant!: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private HttpService: RestaurantService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 's' });
  }
  reloadCurrentPage() {
    window.location.reload();
  }
  deleteRestaurant(id: any) {
    this.HttpService.delete(id).subscribe(
      () => { alert("Delete Successful"); },
      (error) => {
        console.log(error)
        alert(error.error.message)
      },
    );
  }

}
