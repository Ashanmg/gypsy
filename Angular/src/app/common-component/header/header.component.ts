import { Component, OnInit, ViewChild } from '@angular/core';
import { LogginComponent } from '../../rant-component/shared/loggin/loggin.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogedIn = false;
  constructor() { }

  ngOnInit() {
  }

  loginDevRant(data){
    this.isLogedIn = data;
  }

}
