import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event  } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

  currentRoute: String = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.events);
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        this.currentRoute = event.url
      }
    });
  }

  redirectToHome(){
    this.router.navigateByUrl('/crumbs/admin')
  }
}