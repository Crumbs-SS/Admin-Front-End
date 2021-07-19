import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../Shared/Service/user.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-view-drivers',
  templateUrl: './view-drivers.component.html',
  styleUrls: ['./view-drivers.component.css']
})
export class ViewDriversComponent implements OnInit {
  drivers: any;
  searchString: string;
  sortDirection: string;
  sortField: string;
  status: string;
  pageSize: number;
  page: number;
  pageSizeOptions: number[];
  length: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private HttpService: UserService) {
    this.searchString = '';
    this.sortDirection = 'asc';
    this.sortField = 'id';
    this.status = '';
    this.pageSize = 5;
    this.page = 0;
    this.pageSizeOptions = [5, 10, 20, 40];
    this.length = 0;
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadDrivers();
  }

  // tslint:disable-next-line:typedef
  loadDrivers() {
    this.HttpService.getAll(this.searchString, this.sortDirection, this.sortField, this.status, this.pageSize, this.page).subscribe(res => {
      console.log(res);
      this.drivers = res.content;
      this.pageSize = res.size;
      this.page = res.number;
      this.length = res.totalElements;

    });
  }

  returnSearchString() {
    console.log('pressed button');
    this.loadDrivers();
  }

  returnSortConfig(sortConfig: string[]){
    this.sortDirection = sortConfig[0];
    this.sortField = sortConfig[1];
    this.loadDrivers();
  }

  returnPageState(val: PageEvent) {
    this.pageSize = val.pageSize;
    this.page = val.pageIndex;
    this.loadDrivers();
  }

  returnStatusValue(val: string) {
    this.status = val;
    this.loadDrivers();
  }
}
