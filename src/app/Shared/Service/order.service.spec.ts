import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { UpdateOrder } from "src/app/Models/UpdateOrder";
import { OrdersService } from "./orders.service";

describe('OrderService', () => {
    let service:  OrdersService;
    let httpMock: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [OrdersService]
        })
    
        service = TestBed.inject(OrdersService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    
    afterEach(() => {
        httpMock.verify();
    })
    
    it('should get orders via GET', () => {
    
        const fakeOrders = [
            { id: -1, preferences: ''},
            { id: -2, preferences: ''},
            { id: -3, preferences: ''},
        ]
        const page = 0;
        const size = 1;
        const sortBy = '';
        const orderBy = '';
        const filterBy = '';
        const query = '';
        const extras = {sortBy, orderBy, filterBy, query};
        service.getOrders(page, size, extras).subscribe((orders: any) => {
            expect(orders.length).toBe(fakeOrders.length);
            expect(orders).toEqual(fakeOrders);
        });
    
    
        const request = httpMock.expectOne('http://localhost:8010' +
        `/orders?page=${page}&size=${size}&query=${query}&filterBy=${filterBy}&sortBy=${sortBy}&orderBy=${orderBy}`);
        
        expect(request.request.method).toBe('GET');
        request.flush(fakeOrders);
    });

    it('should update order via PUT', () => {
        const fakeOrder =  new UpdateOrder().deserialize({ id: -1, preferences: ''});

        service.updateOrder(fakeOrder, -1).subscribe((order: any) => {
            expect(order).toEqual(fakeOrder);
        })

        const request = httpMock.expectOne('http://localhost:8010' + `/orders/${-1}`);

        expect(request.request.method).toBe('PUT');
        request.flush(fakeOrder);
    })
    
    it('should delete order via DELETE', () => {
        const fakeOrder =  new UpdateOrder().deserialize({ id: -1, preferences: ''});

        service.deleteOrder(-1).subscribe((order: any) => {
            expect(order).toEqual(fakeOrder);
        })

        const request = httpMock.expectOne('http://localhost:8010' + `/orders/${-1}`);

        expect(request.request.method).toBe('DELETE');
        request.flush(fakeOrder);
    })
})
