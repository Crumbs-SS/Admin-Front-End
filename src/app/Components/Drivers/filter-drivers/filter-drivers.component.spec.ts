import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDriversComponent } from './filter-drivers.component';

describe('FilterPriceRatingComponent', () => {
  let component: FilterDriversComponent;
  let fixture: ComponentFixture<FilterDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
