import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {DataService} from './data.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  const xl = 40;
  const l = 50;
  const x = 10;
  const c = 100;
  const i = 1;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule],
      declarations: [AppComponent],
      providers: [DataService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Web Application Using Angular');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Web Application Using Angular');
  }));

  it('check the condition for XL+L', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(xl + x).toBe(50);
    expect(c / x).toEqual(10);
    expect(x * x).toEqual(100);
  }));
});
