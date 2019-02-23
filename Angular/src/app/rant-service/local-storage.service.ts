import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { }

  saveUserDetails(username, token){
    this.cleanUserDetails();
    this.localStorageService.set('username', username);
    this.localStorageService.set('token', token);
  }

  cleanUserDetails(){
    this.localStorageService.clearAll();
  }

  getUserDetails(){
    const userDetails = {
      username : this.localStorageService.get('username'),
      token : this.localStorageService.get('token')
    };

    return userDetails;
  }
}
