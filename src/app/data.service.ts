import {Injectable} from '@angular/core';
import {HttpClient, 
  HttpHeaders, 
  HttpParams, 
  HttpErrorResponse,
  HttpEvent,
  HttpResponse} from '@angular/common/http';
import {HttpObserve}                  from '@angular/common/http/src/client';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


export interface IUserData {
  id: string;
  name: string;
  email: string;
  department: string;
  password: string;
}

export interface IRequestOptions {
  body?: any;

  headers?: {
    [key: string]: string;
  };

  observe?: HttpObserve;
  params?: HttpParams;
  method?: HttpMethod;
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

export type RequestResponse =
Observable<ArrayBuffer>
| Observable<Blob>
| Observable<string>
| Observable<Object>
| Observable<any>
| Observable<HttpEvent<ArrayBuffer>>
| Observable<HttpEvent<Blob>>
| Observable<HttpEvent<string>>
| Observable<HttpEvent<any>>
| Observable<HttpResponse<ArrayBuffer>>
| Observable<HttpResponse<Blob>>
| Observable<HttpResponse<string>>
| Observable<HttpResponse<Object>>;

// see: https://angular.io/api/common/http/HttpRequest#constructor
export type HttpMethod = 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH';

@Injectable()
export class DataService {
  userData: any;
  apiUrl = 'http://localhost:4000/registerusers';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:4000/getusers');
  }

  // createUser(userinfo) {
  //   // const headers = new HttpHeaders({
  //   //   'Content-Type': 'application/json'
  //   // });
  //   // console.log(userinfo, 'userinfo in service');
  //   // this
  //   //   .http
  //   //   .post('http://localhost:4000/registerusers', {
  //   //     'name': 'simha',
  //   //     'email': 'simha@gmail.com'
  //   //   }, {headers: headers})
  //   //   .toPromise()
  //   //   .then((resp) => {
  //   //     console.log('RESP', resp);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log('ERROR', err);
  //   //   });
  //   const bodyString = JSON.stringify(userinfo);
  //   const headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/json')

  //   // return this.http.post(this.apiUrl, bodyString, headers).toPromise();
  // }

  request(endpoint: string, options?: IRequestOptions): Observable<RequestResponse> {
    options = (options || {method: 'GET'});

    const headers: any = {...options.headers};
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    
    for (const key of Object.keys(headers)) {
      if (headers[key] === undefined || headers[key] === null) {
        delete headers[key];
      }
    }
    options.headers = new HttpHeaders(headers) as any;

    // make request and handle errors
    return this
      .http
      .request(options.method, endpoint, options)
      .do((req) => {
        console.log(req ,'req in service');;
      })
      .catch((res: HttpErrorResponse) => {
        console.log(res,'err');
      });
  }

  post(url: string, body: any, options?: IRequestOptions): Observable<any> {
    options = options || {};
    options.method = 'POST';
    options.body = body;

    return this.request(url, options);
  }

  deleteUser(userId: string) {
    console.log('coming here', userId);
    return this.http.delete(`http://localhost:4000/deleteusers/${userId}`);
  }
}
