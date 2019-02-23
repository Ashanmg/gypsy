import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RantService {

  constructor(private http: HttpClient) { }

  getRantList(){
    const apiGetRantUrl = "https://api.devrant.thusitha.site/v1/post.list";

    return this.http.get(apiGetRantUrl);
  }

  setRantVote(id, direction){
    const params = {
      postId: id,
      direction: direction 
    }

    const apiVoteRantUrl = "https://api.devrant.thusitha.site/v1/post.vote";

    return this.http.post(apiVoteRantUrl, params);
  }
}
