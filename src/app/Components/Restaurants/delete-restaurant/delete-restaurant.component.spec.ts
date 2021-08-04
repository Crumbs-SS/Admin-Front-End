import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { DeleteRestaurantComponent } from './delete-restaurant.component';

describe('DeleteRestaurantComponent', () => {
  let component: DeleteRestaurantComponent;
  let fixture: ComponentFixture<DeleteRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestaurantComponent ],
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {params: {id: '24fkzrw3487943uf358lovd'}}
        }
      },
      Router
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
