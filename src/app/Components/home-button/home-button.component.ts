import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  currentRoute: String = '';
  constructor(private router: Router) { }


  hasRoute(route: string) {
    return route === this.router.url;
  }
}