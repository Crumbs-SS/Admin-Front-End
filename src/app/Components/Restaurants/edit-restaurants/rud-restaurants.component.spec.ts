import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudRestaurantsComponent } from './rud-restaurants.component';

describe('RudRestaurantsComponent', () => {
  let component: RudRestaurantsComponent;
  let fixture: ComponentFixture<RudRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RudRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
