import {inject, TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


const url = 'http://localhost:9000/users/getAllUsers';

const registerUrl = 'http://localhost:9000/users/register';

const mockUserResponse = [
  {
    _id: '5aa65bf05dab291246e82b6a',
    deleteuser: false,
    password: 'vijju@123',
    email: 'vijju@gmail.com',
    username: 'vijju',
    lname: 'kumari',
    fname: 'vijaya'

  },
  {
    _id: '5aa664f3d89e4312b8e748a4',
    deleteuser: false,
    password: 'krgs@123',
    email: 'swetha@gmail.com',
    username: 'swethakrgs',
    lname: 'reddy',
    fname: 'swetha'
  }

];

const templateResponse = {
  status: 200,
  statusText: 'OK'
}

describe('DataService', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataService]
    });

    dataService = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('users data getting', (done) => {
    dataService
      .getUsers()
      .toPromise()
      .then((users) => {
        expect(users.length).toEqual(2);
        expect(users[0].username).toBe('vijju');
        expect(users[0].deleteuser).toBeFalsy();
        done();
      })
      .catch(done.fail);

    setTimeout(() => {
      httpMock.expectOne(url).flush(mockUserResponse);
      httpMock.verify();
    }, 500);

  });

  it('create user', (done) => {
    dataService
      .createUser({
        deleteuser: false,
        password: 'hema@123',
        email: 'hema@gmail.com',
        username: 'hema',
        lname: 'M',
        fname: 'hema'
      })
      .subscribe((userData) => {
        expect(userData.status).toBe(200);
        expect(userData.statusText).toBe('OK');
        done();
      }, (err) => {
        console.log(err);
      });

    setTimeout(() => {
      httpMock.expectOne(registerUrl).flush(templateResponse);
      httpMock.verify();
    }, 500);
  });
});
