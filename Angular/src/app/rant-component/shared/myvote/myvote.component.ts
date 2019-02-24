import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StorageService } from '../../../rant-service/local-storage.service';
import { RantService } from '../../../rant-service/rant.service';

@Component({
  selector: 'app-myvote',
  templateUrl: './myvote.component.html',
  styleUrls: ['./myvote.component.css']
})
export class MyvoteComponent implements OnInit {


  @Input() totalvotes = 0;
  @Input() myVote = 0;
  @Output() valueChange = new EventEmitter();

  constructor(private rantService: RantService, private storageService: StorageService) { }

  ngOnInit() {
  }

  onVoteForRant(isupvote){
    this.valueChange.emit(isupvote);
  }

}
