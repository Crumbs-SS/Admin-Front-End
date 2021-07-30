import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOrdersComponent } from './sort-orders.component';

describe('SortOrdersComponent', () => {
  let component: SortOrdersComponent;
  let fixture: ComponentFixture<SortOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
