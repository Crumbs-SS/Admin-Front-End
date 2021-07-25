
import { TestBed , inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {
    let service:  AccountService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AccountService]
        })

        service = TestBed.inject(AccountService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    })

    it('should retrieve users from API via GET', () => {
        const fakeUsers = [{
            id: -1,
            username: 'JoneDoe',
            firstName: 'Jone',
            lastName: 'Doe'
        }]
        const page = 0;
        const size = 1;
        const sortBy = '';
        const orderBy = '';
        const filterBy = '';
        const query = '';
        const extras = {sortBy, orderBy, filterBy, query};
        service.getUsers(page, size, extras).subscribe(users => {
            expect(users.length).toBe(1);
            expect(users).toEqual(fakeUsers);
        });

        const request = httpMock.expectOne(
            'http://localhost:8080' + `/users?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}&query=${query}`
        );
        
        expect(request.request.method).toBe('GET');
        request.flush(fakeUsers);
    })
})