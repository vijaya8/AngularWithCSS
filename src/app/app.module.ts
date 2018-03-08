import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoadpageComponent} from './loadpage/loadpage.component';
import {DataService} from './data.service';
import {RouterTestingModule} from '@angular/router/testing';
import {UserprofileComponent} from './userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoadpageComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LoadpageComponent
        },
        {
          path: 'register',
          component: RegistrationComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'userprofile',
          component: UserprofileComponent
        }
      ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
