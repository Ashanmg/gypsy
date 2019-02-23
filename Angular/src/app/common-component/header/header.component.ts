import { Component, OnInit, ViewChild } from '@angular/core';
import { LogginComponent } from '../../rant-component/shared/loggin/loggin.component';
import { StorageService } from '../../rant-service/local-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogedIn = false;
  isUserLoggingSuccess = false;
  loggedUsername: any;

  constructor(private localStorage : StorageService) { }

  ngOnInit() {

  }

  loginDevRant(data){
    this.isLogedIn = data;
  }

  isloggedUser(data){
    this.isUserLoggingSuccess = true;
    let userData = this.localStorage.getUserDetails();
    this.loggedUsername = userData['username'];
    debugger;
  }

}
