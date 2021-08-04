import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPriceRatingComponent } from './filter-price-rating.component';

describe('FilterPriceRatingComponent', () => {
  let component: FilterPriceRatingComponent;
  let fixture: ComponentFixture<FilterPriceRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPriceRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPriceRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
