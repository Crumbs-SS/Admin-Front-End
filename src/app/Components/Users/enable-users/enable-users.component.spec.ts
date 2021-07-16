import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableUsersComponent } from './enable-users.component';

describe('EnableUsersComponent', () => {
  let component: EnableUsersComponent;
  let fixture: ComponentFixture<EnableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
