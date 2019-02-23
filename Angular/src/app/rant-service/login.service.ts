import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getUserActive(username, password){
    const params = {
      username: username,
      password: password
    }

    const apiUrl = "https://api.devrant.thusitha.site/v1/user.activate";

    return this.http.post(apiUrl, params);
  }

  setUserDeactive(){

    const apiUrl = "https://api.devrant.thusitha.site/v1/user.deactivate";

    return this.http.post(apiUrl, null);

  }

}
