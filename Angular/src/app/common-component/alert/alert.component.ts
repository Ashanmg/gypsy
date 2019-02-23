import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  title: any;
  description: any;

  @Input() alertData;
  @Input() isAlertPopupOpen = false;
  constructor() { }

  ngOnInit() {
    if(this.alertData !== null){
      this.title = this.alertData.title;
      this.description = this.alertData.description;
    } else {
      this.title = "OPPS";
      this.description = "Something goes wrong. Try again within few minutes";
    }
  }

  exitAlertPopup(){
    this.isAlertPopupOpen = false;
  }

}
