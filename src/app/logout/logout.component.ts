import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {DataService} from '.././data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  totalUsers: any;

  constructor(private  dataService: DataService,
              private router: Router) {
  }

  logout() {
    this.router.navigate(['']);
  }

  ngOnInit() {

    this.dataService.getUsers().subscribe(result => {
      this.totalUsers = result.allusers;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });

  }

}
