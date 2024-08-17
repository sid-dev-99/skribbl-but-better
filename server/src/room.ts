import { MAX_PLAYERS } from '../constants/config';
import User from './user';

export class Room{
    
    users:User[];
    drawingState:any[];
    activeUserIdx:number;
    gameOn:boolean;
    round:number | null;




isFull():boolean{
    return this.users.length === MAX_PLAYERS
}

addUser():void{

    let user = this.users.pop()
    //add user




}


removeUser(user:User):void{
    this.users = this.users.filter(x => x.userId !== user.userId)
    this.broadcast('removeUser',{})
}


broadcast(msg:string,payload:{},excludedUser:User | undefined = undefined):void{
    this.users.forEach((user)=>{  
        if(!excludedUser || (user.userId !== excludedUser.userId)){
        user.socket.emit(msg,payload)
        }
    }
)};

//broadcastChatmsg(msg):void{}




}