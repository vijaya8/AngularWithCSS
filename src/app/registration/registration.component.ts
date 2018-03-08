import {Component, OnInit} from '@angular/core';
import {DataService} from '.././data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userInfo: any;

  constructor(private dataservice: DataService) {
  }

  submitUserDetails(userData: any) {
    // console.log('....data', userData);
    // this.userInfo = userData;
    // this.dataservice.createUser(this.userInfo);
    // this
    //   .dataservice
    //   .createUser(this.userInfo)
    //   .subscribe(ressult => {
    //     console.log('Result is', ressult);
    //   }, (err) => {
    //     console.log(err);
    //   });
    const body = {
      'firstName': userData.name,
      'lastName': userData.email,
      'email': userData.department,
      'password': userData.password
    };

   return this
      .dataservice
      .post('http://localhost:4000/registerusers',body)
      .then((resp) => {
        console.log('resp');
      })
      .catch(reject => console.log(reject));
  }

  ngOnInit() {
  }

}
