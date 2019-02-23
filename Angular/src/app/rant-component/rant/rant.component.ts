import { RantService } from './../../rant-service/rant.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RantModel } from './rant.model';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {

  rantList : any = [];
  @Output() gettingrantList = new EventEmitter();


  constructor(private rantService: RantService) { }

  ngOnInit() {
    this.rantService.getRantList().subscribe(
      (obj : any) => {
        if(obj.ok){
          if(obj.posts.length > 0){
            this.rantList = obj.posts;
            this.gettingrantList.emit(false);
          }
        }else{
          console.log(obj);
        }
      },error => {

      }
    );
  }
}
