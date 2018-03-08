import {Component, OnInit} from '@angular/core';
import {DataService} from '.././data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: any[];
  userData: any;

  constructor(private dataservice: DataService,
              private router: Router) {
  }

  login(loginData) {
    console.log('usermail', loginData);
    this.userDetails.forEach(user => {
      if (user.email === loginData.useremail && user.password === loginData.userpassword) {
        console.log('only once', user);
        this.userData = user;
        this.router.navigate(['userprofile']);
      }
    });
  }

  ngOnInit() {
    // this.dataservice.getUsers().subscribe(result => {
    //   this.userDetails = result;
    //   console.log(this.userDetails, 'this.userDetails');
    // }, (err: HttpErrorResponse) => {
    //   if (err.error instanceof Error) {
    //     console.log('Client-side error occured.');
    //   } else {
    //     console.log('Server-side error occured.');
    //   }
    // });

    this.dataservice.deleteUser('5a98ea041a41670b5762caff').subscribe(deleteUser => {
      console.log('result in delete', deleteUser);
    });
  }
}
