import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  accountNumber : string = '';
  email : string= '';
  password : string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  onLogin() {
    const validAccountNumber = '280203';
    const validEmail = 'sashank@gmail.com';
    const validPassword = 'Sashank@2003';

    if (
      this.accountNumber === validAccountNumber &&
      this.email === validEmail &&
      this.password === validPassword
    ) {
      // Redirect to the "Account" component when credentials are correct
      this.router.navigate(['/account']);
    } else {
      // Display an error message when credentials are incorrect
      
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
