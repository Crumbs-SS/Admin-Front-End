import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRoleComponent } from './filter-role.component';

describe('FilterRoleComponent', () => {
  let component: FilterRoleComponent;
  let fixture: ComponentFixture<FilterRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
