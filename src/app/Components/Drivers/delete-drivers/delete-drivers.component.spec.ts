import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDriversComponent } from './delete-drivers.component';

describe('DeleteDriversComponent', () => {
  let component: DeleteDriversComponent;
  let fixture: ComponentFixture<DeleteDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
