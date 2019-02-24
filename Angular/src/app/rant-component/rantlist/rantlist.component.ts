import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rantlist',
  templateUrl: './rantlist.component.html',
  styleUrls: ['./rantlist.component.css']
})
export class RantlistComponent implements OnInit {

  @Input() showProgress = false;
  isAddingNewRant = false;

  constructor() { }

  ngOnInit() {
    this.showProgress = true;
  }

  isLoadingRantList(value){
    this.showProgress = value;
  }
}
