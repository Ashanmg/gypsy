import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  @Input() isLogginPopupOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
