import { LoginService } from './../../../rant-service/login.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  @Input() isLogginPopupOpen = false;
  @Output() exitPopup = new EventEmitter();
  showLoginProgress = false;
  isUserNamevalid = true;
  isPasswordValid = true;
  Username = "";
  Password = "";
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  resetDefault(){
    this.Username = "";
    this.Password = "";
    this.isPasswordValid = true;
    this.isUserNamevalid = true;
    this.showLoginProgress = false;
  }

  exitLogginPopup(){
    this.isLogginPopupOpen = false;
    this.exitPopup.emit(this.isLogginPopupOpen); 
    this.resetDefault();
  }

  onLoginSubmit(login: NgForm){
    if (login.valid) {
      this.showLoginProgress = true;
      debugger;

      this.loginService.getUserActive(this.Username, this.Password).subscribe(
        (obj : any) =>{
          this.showLoginProgress = false;
        },
        error => {

        });
    }else{
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
