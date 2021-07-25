import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUsersComponent } from './sort-users.component';

describe('SortUsersComponent', () => {
  let component: SortUsersComponent;
  let fixture: ComponentFixture<SortUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
