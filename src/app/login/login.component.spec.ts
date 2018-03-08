import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {DataService} from '.././data.service';
import {HttpClientModule} from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [LoginComponent],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
