import { Component, OnInit, ViewChild } from '@angular/core';
import { LogginComponent } from '../../rant-component/shared/loggin/loggin.component';
import { StorageService } from '../../rant-service/local-storage.service';
import { LoginService } from '../../rant-service/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogedIn = false;
  isUserLoggingSuccess = false;
  loggedUsername: any;

  constructor(private localStorage : StorageService, private loginService: LoginService) { }

  ngOnInit() {
    if(this.localStorage.getUserDetails() !== null){
      const userData = this.localStorage.getUserDetails();
      if(userData.username !== null && userData.token !== null){
        this.isUserLoggingSuccess = true;
        this.loggedUsername = userData.username;
      }
    } else{
      this.localStorage.cleanUserDetails();
    }
  }

  loginDevRant(data){
    this.isLogedIn = data;
  }

  signOut(){
    this.loginService.setUserDeactive().subscribe(
      (obj : any) => {
        if(obj.ok){
          this.localStorage.cleanUserDetails();
          this.isUserLoggingSuccess = false;
          this.loggedUsername = "";
        }else{
          console.log(obj);
        }
      }, error => {

      });
  }

  isloggedUser(data){
    this.isUserLoggingSuccess = true;
    let userData = this.localStorage.getUserDetails();
    this.loggedUsername = userData['username'];
  }

}
