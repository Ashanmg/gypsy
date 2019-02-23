import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RantService } from '../../rant-service/rant.service';

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
    private rantService: RantService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.queryparameters = params;
      });
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

}
