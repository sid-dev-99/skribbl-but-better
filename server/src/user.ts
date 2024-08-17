// define user interface here
export default class User {

    userId:number;
    userSocket:WebSocket;
    score:number;
    isconnected:boolean;
    username:string;


constructor(userId:number,userSocket:WebSocket,score:number,isconected:boolean,username:string) {

    this.userId = userId;
    this.userSocket = userSocket;
    this.score = 0;
    this.isconnected = true;
    this.username = username;
    
}
}


