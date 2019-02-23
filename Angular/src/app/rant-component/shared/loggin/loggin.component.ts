import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  @Input() isLogginPopupOpen = false;
  @Output() exitPopup = new EventEmitter();
  showLoginProgress = false; 
  constructor() { }

  ngOnInit() {
  }

  exitLogginPopup(){
    this.isLogginPopupOpen = false;
    this.exitPopup.emit(this.isLogginPopupOpen); 
  }

}
