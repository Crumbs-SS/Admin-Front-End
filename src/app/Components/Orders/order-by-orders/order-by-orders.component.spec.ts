import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByOrdersComponent } from './order-by-orders.component';

describe('OrderByOrdersComponent', () => {
  let component: OrderByOrdersComponent;
  let fixture: ComponentFixture<OrderByOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
