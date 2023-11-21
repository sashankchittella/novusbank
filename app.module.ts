import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  
];

@NgModule({
  declarations: [AppComponent, LoginComponent, AccountComponent, ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}



