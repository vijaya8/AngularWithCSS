import {Component, OnInit} from '@angular/core';
import {DataService} from '.././data.service';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: any[];
  singleuserData: any;

  constructor(private dataService: DataService,
              private router: Router,
              private  http: HttpClient) {
  }

  login(loginData) {
    this.http.post('http://localhost:9000/users/login', loginData)
      .subscribe(userLoginData => {
        console.log('user success', userLoginData);
        this.singleuserData = userLoginData;
        this.dataService.userData = this.singleuserData;
        const myObj = this.singleuserData;
        localStorage.setItem('userDeatils', JSON.stringify(myObj));
        if (this.singleuserData.username === 'admin') {
          console.log('coming here if');
          this.router.navigate(['admin']);
        } else {
          console.log('coming here else');
          this.router.navigate(['userprofile']);
        }

      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  ngOnInit() {

  }
}
