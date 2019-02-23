import { Router, Routes } from '@angular/router';
import { RantService } from './../../rant-service/rant.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RantModel } from './rant.model';
import { StorageService } from '../../rant-service/local-storage.service';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {

  rantList : any = [];
  @Output() gettingrantList = new EventEmitter();


  constructor(private rantService: RantService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.getRantList();
  }

  getRantList(){
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

  onVoteForRant(rant, isupvote){
    if(this.storageService.getUserDetails() !== null){
      const direction = isupvote ? "up" : "down";
      this.rantService.setRantVote(rant.id, direction).subscribe((obj : any) => {
        if(obj.ok){
          this.getRantList();
        }else{
          console.log(obj);
        }
      }, error =>{

      });
    }else{

    }
  }
}
