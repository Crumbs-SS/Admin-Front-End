import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortPipe } from 'src/app/Shared/Custom/sort.pipe';

import { SortRestaurantsComponent } from './sort-restaurants.component';

describe('SortRestaurantsComponent', () => {
  let component: SortRestaurantsComponent;
  let fixture: ComponentFixture<SortRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortRestaurantsComponent ],
      providers:[SortPipe]
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
