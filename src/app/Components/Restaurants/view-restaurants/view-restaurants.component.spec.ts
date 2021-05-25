import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantComponents } from './view-restaurants.component';

describe('RudRestaurantsComponent', () => {
  let component: ViewRestaurantComponents;
  let fixture: ComponentFixture<ViewRestaurantComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
