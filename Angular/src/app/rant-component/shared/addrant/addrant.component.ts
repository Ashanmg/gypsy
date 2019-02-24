import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { RantService } from '../../../rant-service/rant.service';
import { StorageService } from '../../../rant-service/local-storage.service';
import { THIS_EXPR } from '../../../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-addrant',
  templateUrl: './addrant.component.html',
  styleUrls: ['./addrant.component.css']
})
export class AddrantComponent implements OnInit {

  isAddPopupOpen = false;
  showLoginProgress = false;
  postText = "";
  isvalidResponse = true;
  errorMessage = "";
  @Output() addNewPost = new EventEmitter();
  @ViewChild('textpost') textElement: any;

  constructor(private rantService : RantService, private localStorage : StorageService) { }

  ngOnInit() {
  }

  onNewRantSubmit(newRant: NgForm){
    if (newRant.valid) {
      this.showLoginProgress = true;
      this.rantService.addNewRant(this.postText).subscribe(
        (obj : any) =>{
          if(obj.ok){
            this.addNewPost.emit(true);
            this.exitAddPopup();
          } else{
            this.addNewPost.emit(false);
            this.isvalidResponse = false;
            this.errorMessage = "Post contains empty content. Post again !";
          }
          this.showLoginProgress = false;
        },
        error => {
          this.isvalidResponse = false;
          this.errorMessage = "Internal server error found. Try again later !";
        });
    }else{
      this.textElement.nativeElement.focus();
      this.isvalidResponse = false;
      this.errorMessage = "Rant content is required";
    }
  }

  newRantAdd(){
    let obj = this.localStorage.getUserDetails();
    if( obj !== null && obj.username !== null && obj.token !== null){
      this.isAddPopupOpen = true;
      this.textElement.nativeElement.focus();
    }else{
      // if user not loggin
    }
  }

  exitAddPopup(){
    this.isAddPopupOpen = false;
    this.showLoginProgress = false;
    this.errorMessage = "";
    this.postText = "";
    this.isvalidResponse = true;
  }

  addFormInput(){
    this.isvalidResponse = true;
  }
}
