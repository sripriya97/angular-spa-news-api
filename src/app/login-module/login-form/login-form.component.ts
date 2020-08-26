import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/login-module/authenticate.service';
import { RoutingService } from 'src/app/services/routing.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    username: null,
    password: null,
    subscribe: 'free'
  });

  constructor(private fb: FormBuilder, private authService : AuthenticateService,
   private routerService : RoutingService) {}

  onSubmit(user) {
    //authenticate user and store token
    let token = this.authService.authenticate(user);
    if (token) {
      this.authService.storeToken(token);
      //route to previous page
      this.routerService.routeToPrevious();
    } else {
      this.routerService.routeToLogin();
    }

  }
}
