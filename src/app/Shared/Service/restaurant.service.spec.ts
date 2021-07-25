// import { getTestBed, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { RestaurantService } from './restaurant.service';

// describe('RestaurantService', () => {
//   let injector: TestBed;
//   let service: RestaurantService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [RestaurantService]
//     });
//   injector = getTestBed();
//   service = injector.inject(RestaurantService);
//   httpMock = injector.inject(HttpTestingController);
//   });
//   afterEach(() => {
//     httpMock.verify();
//   });
//   it('should create', () => {
//     expect(RestaurantService).toBeTruthy();
//   });
//   describe('#getAll', () => {
//     it('should return an any[]', () => {
//       const dummyRestaurants = [
//         {
//           "id": 145,
//           "menuItems": [],
//           "categories": [],
//           "location": {
//             "id": 111,
//             "city": "Dallas",
//             "zipCode": 75240,
//             "state": "TX",
//             "street": "13107 Copenhill Road"
//           },
//           "name": "Jonathan's Banger Restaurant",
//           "rating": null,
//           "priceRating": 1,
//           "restaurantOwner": {
//             "id": 111,
//             "userDetail": {
//               "id": 111,
//               "firstName": "Jonathan",
//               "lastName": "Frey",
//               "email": "jfrey2704@gmail.com"
//             }
//           }
//         },
//         {
//           "id": 146,
//           "menuItems": [],
//           "categories": [
//             {
//               "id": {
//                 "restaurantId": 146,
//                 "categoryId": "American"
//               }
//             },
//             {
//               "id": {
//                 "restaurantId": 146,
//                 "categoryId": "Burger"
//               }
//             }
//           ],
//           "location": {
//             "id": 112,
//             "city": "Palm Springs",
//             "zipCode": 92262,
//             "state": "CA",
//             "street": "211 Luring Drive"
//           },
//           "name": "mcdonalds",
//           "rating": null,
//           "priceRating": 2,
//           "restaurantOwner": {
//             "id": 112,
//             "userDetail": {
//               "id": 112,
//               "firstName": "james",
//               "lastName": "goog",
//               "email": "google@gmail.com"
//             }
//           }
//         }
//       ];

//       service.getAll().subscribe(restaurants => {
//         expect(restaurants.length).toBe(2);
//         expect(restaurants).toEqual(dummyRestaurants);
//       });

//       const req = httpMock.expectOne(`${service.restaurantURL}s`);
//       expect(req.request.method).toBe("GET");
//       req.flush(dummyRestaurants);
//     });
//   });

// describe('#save()', () => {
//   it('returned restaurant should match the right data', () => {
//     const mockRestaurantDTO = {
//       "firstName": "Jonathan",
//       "lastName": "Frey",
//       "email": "jfrey2704@gmail.com",
//       "street": "211 Luring Drive",
//       "city": "Palm Springs",
//       "zip": 92262,
//       "state": "CA",
//       "name": "Jonathan's Banger Restaurant",
//       "priceRating": 1,
//       "categories": [
//         "American"
//       ]
//     };

//     service.save(mockRestaurantDTO)
//       .subscribe(restaurant => {
//         expect(restaurant.name).toEqual("Jonathan's Banger Restaurant");
//       });

//     const req = httpMock.expectOne(`${service.restaurantURL}`);

//     expect(req.request.method).toEqual('POST');

//     req.flush(mockRestaurantDTO);
//   });
// });

// describe('#update()', () => {
//   it('returned restaurant should match the right data', () => {
//     const mockRestaurantDTO = {
//       "firstName": "Jonathan",
//       "lastName": "Frey",
//       "email": "jfrey2704@gmail.com",
//       "street": "211 Luring Drive",
//       "city": "Palm Springs",
//       "zip": 92262,
//       "state": "CA",
//       "name": "Jonathan's Banger Restaurant",
//       "priceRating": 1,
//       "categories": [
//           "American"
//       ]
//     };

//     service.update(1,mockRestaurantDTO)
//       .subscribe(restaurant => {
//         expect(restaurant.firstName).toEqual("Jonathan's Banger Restaurant");
//         expect(restaurant.id).toEqual(1);
//       });

//     const req = httpMock.expectOne('this.restaurantURL/1');

//     expect(req.request.method).toEqual('PUT');

//     req.flush(mockRestaurantDTO);
//   });
// });


// });

  
  

