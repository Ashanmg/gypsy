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

  getRantDetails(postId){
    const apiRantDetailUrl = "https://api.devrant.thusitha.site/v1/";

    return this.http.get(apiRantDetailUrl + `post.details?postId=${postId}`);
  }

  addNewRant(content){
    const params = {
      content : content
    }

    const apiGetRantUrl = "https://api.devrant.thusitha.site/v1/post.add";

    return this.http.post(apiGetRantUrl, params);
  }

  deletePost(id){

    const postId =  id ;

    const apiDeleteRantUrl = "https://api.devrant.thusitha.site/v1/post.delete";

    return this.http.delete(apiDeleteRantUrl, postId);
    // need to check
  }
}
