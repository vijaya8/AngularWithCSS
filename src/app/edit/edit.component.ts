import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '.././data.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  loggedInUser: any;
  useredited: boolean;
  updatedUser: any;

  @Output() messageEvent = new EventEmitter<any>();


  constructor(private  dataService: DataService,
              private http: HttpClient) {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDeatils'));
    // this.loggedInUser = this.dataService.userData;
  }


  editUserDetails(editedUserData) {
    console.log('in edit com', editedUserData);
    editedUserData._id = this.loggedInUser._id;
    this.dataService.updateUesr(editedUserData)
      .subscribe(editeduser => {
        this.updatedUser = editeduser;
        localStorage.setItem('userDeatils', JSON.stringify(this.updatedUser));
        this.updatedUser.useredited = false;
        this.messageEvent.emit({edited: this.updatedUser});
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
