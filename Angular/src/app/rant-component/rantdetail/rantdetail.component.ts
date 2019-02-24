import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RantService } from '../../rant-service/rant.service';
import { StorageService } from '../../rant-service/local-storage.service';

@Component({
  selector: 'app-rantdetail',
  templateUrl: './rantdetail.component.html',
  styleUrls: ['./rantdetail.component.css']
})
export class RantdetailComponent implements OnInit {

  queryparameters = null;
  rantData : any;
  isMsgPopupOpen = false;
  showLoginProgress = false;
  errorMessage = "";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private rantService: RantService,
    private storageService: StorageService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.queryparameters = params;
      });

    this.getRantDetails();
  }

  getRantDetails(){
    this.showLoginProgress = true;
    this.rantService.getRantDetails(this.queryparameters['rant_id']).subscribe(
      (obj : any) => {
        if(obj.ok){
          this.rantData = obj.post;
        }else{
          this.errorMessage = "Can not find post details. Try again !";
        }
        this.showLoginProgress = false;
      }, error => {

      });
  }

  onVoteForRant(result,rant){
    let obj = this.storageService.getUserDetails();
    if( obj !== null && obj.username !== null && obj.token !== null){
      let direction = result ? "up" : "down";

      if(rant.myVote === 1 && direction === "up"){
        direction = "reset";
      } else if(rant.myVote === -1 && direction === "down"){
        direction = "reset";
      }

      this.rantService.setRantVote(rant.id, direction).subscribe((obj : any) => {
        if(obj.ok){
          this.getRantDetails();
        }else{
        }
      }, error =>{

      });
    }else{

    }
  }

  onDeletePostDetails(rant){
    let obj = this.storageService.getUserDetails();
    if( obj !== null && obj.username !== null && obj.token !== null && rant.id !== null){
      this.rantService.deletePost(rant.id).subscribe(
        (obj : any) =>{
          if(obj.ok){
            // rederect to listpage
            this.router.navigate[''];
          }else{
            // alert message
          }
        }, error => {
          // alert error
        });
    }else{
  // alert error      
    }
  }

}
