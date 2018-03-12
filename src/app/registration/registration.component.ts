import {Component, OnInit} from '@angular/core';
import {DataService} from '.././data.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userInfo: any;

  constructor(private dataservice: DataService,
              private http: HttpClient,
              private router: Router) {
  }

  submitUserDetails(userData: any) {
    console.log('....data', userData);
    const body = {
      'firstName': userData.fname,
      'lastName': userData.lname,
      'userName': userData.userName,
      'email': userData.email,
      'password': userData.password
    };

    return this
      .dataservice
      .createUser(body)
      .subscribe((resp) => {
        this.router.navigate(['']);
      }, (err: HttpErrorResponse) => {
        console.log('in error block', err);
      });

  }

  ngOnInit() {
  }

}
