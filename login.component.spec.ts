import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { of } from 'rxjs'; // Import 'of' from RxJS

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }, // Mock Router
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject Router
  });



  it('should redirect to the account component on successful login', () => {
    component.accountNumber = '280203';
    component.email = 'sashank@gmail.com';
    component.password = 'Sashank@2003';

    component.onLogin();

    expect(router.navigate).toHaveBeenCalledWith(['/account']);
  });

  it('should display an error message on invalid login', () => {
    component.accountNumber = '648765';
    component.email = 'sash@gmsil.com';
    component.password = 'qwwrtli';

    component.onLogin();

    expect(component.errorMessage).toBe('Invalid credentials. Please try again.');
  });
});
