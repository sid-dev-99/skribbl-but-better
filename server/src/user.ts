// define user interface here
export default class User {

    userId:number;
    userSocket:WebSocket;
    score:number;
    username:string;


    constructor(userId:number,userSocket:WebSocket,score:number,isconected:boolean,username:string) {
    this.userId = userId;
    this.userSocket = userSocket;
    this.score = 0;
    this.username = username;
    }

    userInfo(){
        return {id:this.userId,username:this.username,score:this.score,socket:this.userSocket}
    }
}


