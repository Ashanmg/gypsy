export class RantModel {
    constructor(
      public author: string,
      public commentCount: number,
      public content: string,
      public displayTime: string,
      public id: string,
      public isMyPost: boolean,
      public myVote: number,
      public timestamp?: number,
      public votes?: number
    ) {  }
}