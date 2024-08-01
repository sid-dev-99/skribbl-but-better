// define user interface here
class User {

    userId:number;
    userSocket:WebSocket;
    score:number;
    isconnected:boolean;
    username:string;


constructor(userId:number,userSocket:WebSocket,score:number,isconected:boolean,username:string) {


    this.userId = userId;
    this.userSocket = userSocket;
    this.score = score;
    this.isconnected = isconnected;
    this.username = username;




}
    

}


