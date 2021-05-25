import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortRestaurantsComponent } from './sort-restaurants.component';

describe('SortRestaurantsComponent', () => {
  let component: SortRestaurantsComponent;
  let fixture: ComponentFixture<SortRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
