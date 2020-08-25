import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public users = [];
  public username;

  constructor() {
    this.users = [
      {
        username: 'user1',
        password: 'pass1'
      },
      {
        username: 'user2',
        password: 'pass2'
      }
    ];
  }
  //authenticate user if present in users list
  authenticate(user): any {
    let token;
    const foundUser = this.users.find(u =>
      u.username === user.username
      && u.password === user.password
    );

    if (foundUser) {
      //generate random token
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      //store username
      this.username = user.username;
      console.log(`username is ${this.username}`);
    }
    return token;
  }

  //store token in local storage
  storeToken(token) {
    localStorage.setItem('token', token);
  }

  //get token from local storage
  getToken() {
    return localStorage.getItem('token');
  }

  //check if user is authenticated
  isAuthenticated() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

}

