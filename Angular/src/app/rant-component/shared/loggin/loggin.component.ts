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
  constructor() { }

  ngOnInit() {
  }

  exitLogginPopup(){
    this.isLogginPopupOpen = false;
    this.exitPopup.emit(this.isLogginPopupOpen); 
  }

  onLoginSubmit(login: NgForm){
    if (login.valid) {
      console.log(" The login is valid");
    }else{
      debugger;
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
