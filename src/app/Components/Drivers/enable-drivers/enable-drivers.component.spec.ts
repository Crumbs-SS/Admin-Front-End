import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableDriversComponent } from './enable-drivers.component';

describe('EnableDriversComponent', () => {
  let component: EnableDriversComponent;
  let fixture: ComponentFixture<EnableDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
