import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
  
  @Input() restaurant!: any;
  
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  
  open(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 's' });
  }
}
