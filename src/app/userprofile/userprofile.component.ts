import {Component, OnInit} from '@angular/core';
import {DataService} from '.././data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  loggedInuser: any;
  isUserEdited: boolean;

  constructor(private  dataService: DataService,
              private router: Router) {

    this.isUserEdited = false;
  }


  editUser(userEdited: boolean) {
    this.isUserEdited = userEdited;
  }

  receiveMessage(event) {
    this.isUserEdited = event.edited.useredited;
    this.loggedInuser = event.edited;
  }

  logout() {
    this.router.navigate(['']);
  }


  deleteUserData(userId: string) {
    this.dataService.deleteUser(userId)
      .subscribe(deleteduser => {
        this.router.navigate(['']);
      });
  }

  ngOnInit() {

    this.loggedInuser = JSON.parse(localStorage.getItem('userDetails'));
    console.log('userloggedin', this.loggedInuser);

  }

}
