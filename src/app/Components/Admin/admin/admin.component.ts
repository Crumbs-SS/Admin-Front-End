import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../Shared/Service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/crumbs/admin/login']);
  }

  ngOnInit(): void {
  }

}
