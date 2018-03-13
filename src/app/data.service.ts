import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


export interface IUserData {
  id: string;
  fname: string;
  lname: string;
  userName: string;
  email: string;
  password: string;
  user: any;
}

@Injectable()
export class DataService {
  userData: IUserData;
  apiUrl = 'http://localhost:4000/registerusers';


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:9000/users/getAllUsers');
  }

  createUser(userinfo): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this
      .http
      .post('http://localhost:9000/users/register', userinfo, {headers: headers});
  }

  // request(endpoint: string, options?: IRequestOptions): Observable<RequestResponse> {
  //   options = (options || {method: 'GET'});
  //
  //   const headers: any = {...options.headers};
  //   headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  //   options.headers = new HttpHeaders(headers) as any;
  //
  //   console.log(endpoint, 'endpoint service body');
  //   console.log(options, 'options');
  //   // make request and handle errors
  //   return this
  //     .http
  //     .request(options.method, endpoint, options)
  //     .do((req) => {
  //       console.log(req, 'req in service');
  //     });
  // }
  //
  // post(url: string, body: any, options?: IRequestOptions): Observable<any> {
  //   console.log(body, 'in service body');
  //   options = options || {};
  //   options.method = 'POST';
  //   options.body = body;
  //
  //   return this.request(url, options);
  // }

  updateUesr(updateUesrData) {
    return this.http.put(`http://localhost:9000/users/editUser`, updateUesrData);
  }

  deleteUser(userId: string) {
    const params = new HttpParams().set('id', userId);
    return this.http.delete('http://localhost:9000/users/deleteUser', {params});
  }
}
