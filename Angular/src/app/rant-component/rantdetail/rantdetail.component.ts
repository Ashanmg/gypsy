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
    this.rantService.getRantDetails(this.queryparameters['rant_id']).subscribe(
      (obj : any) => {
        if(obj.ok){
          this.rantData = obj.post;
          console.log(this.rantData);
        }else{

        }
      }, error => {

      });
  }

  onVoteForRant(result,rant){
    if(this.storageService.getUserDetails() !== null){
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
          console.log(obj);
        }
      }, error =>{

      });
    }else{

    }
  }

}
