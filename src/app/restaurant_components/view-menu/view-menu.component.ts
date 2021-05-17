import { Component, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class ViewMenuComponent {

  closeResult: string | undefined;

  constructor(private modalService: NgbModal) {}

  openContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true , size: 'xl'});
  }
}
