import { Injectable } from '@angular/core';

// Manual creation of an injector here  

@Injectable()
export class UserService {
  user: any;

  setUser(newUser) {
    this.user = newUser;
  }
  
  getUser(): any { 
    return this.user;
  } 
}
