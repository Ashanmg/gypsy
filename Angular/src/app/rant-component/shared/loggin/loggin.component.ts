import { LoginService } from './../../../rant-service/login.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { StorageService } from '../../../rant-service/local-storage.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  @Input() isLogginPopupOpen = false;
  @Output() exitPopup = new EventEmitter();
  @Output() userlogin = new EventEmitter();
  showLoginProgress = false;
  isUserNamevalid = true;
  isPasswordValid = true;
  Username = "";
  Password = "";
  isCredentialValid = true;

  constructor(private loginService: LoginService, private storageService : StorageService) { }

  ngOnInit() {
  }


  resetDefault(){
    this.Username = "";
    this.Password = "";
    this.isPasswordValid = true;
    this.isUserNamevalid = true;
    this.showLoginProgress = false;
    this.isCredentialValid = true;
  }

  exitLogginPopup(){
    this.isLogginPopupOpen = false;
    this.exitPopup.emit(this.isLogginPopupOpen); 
    this.resetDefault();
  }

  onLoginSubmit(login: NgForm){
    if (login.valid) {
      this.showLoginProgress = true;
      this.isCredentialValid = true;

      this.loginService.getUserActive(this.Username, this.Password).subscribe(
        (obj : any) =>{
          if(!obj.ok){
            this.isCredentialValid = false;
          } else{
            this.storageService.saveUserDetails(obj.username, obj.token);
            this.exitLogginPopup();
            this.userlogin.emit(true);
          }
          this.showLoginProgress = false;
        },
        error => {

        });
    }else{
      this.isCredentialValid = true;
      if(login.value.username === ""){
        this.isUserNamevalid = false;
      }

      if(login.value.pword === ""){
        this.isPasswordValid = false;  
      }
    }
  }

  loginFormInput(input){
    if(input === 'username'){
      this.isUserNamevalid = true;
    }else{
      this.isPasswordValid = true;
    }
  }

}
