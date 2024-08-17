
import MAX_PLAYERS from './config';
import User from './user';


export class Room{
    
    users:User[];
    drawingState:any[];
    activeUserIdx:number;
    gameOn:boolean;
        round:number | null;


    isFull():boolean{
        return this.users.length === MAX_PLAYERS.MAX_PLAYERS;
    }

    addUser(user:User):void{

        if(this.users.length > MAX_PLAYERS.MAX_PLAYERS){
            throw new Error('Players exceeded');
        }
        this.users.push(user)
        this.broadcast('userAdded',user.userInfo())
    }


removeUser(user:User):void{
    this.users = this.users.filter(x => x.userId !== user.userId)
    this.broadcast('removeUser',user.userInfo)
}


broadcast(msg:string,payload:{},excludedUser:User | undefined = undefined):void{
    this.users.forEach((user)=>{  
        if(!excludedUser || (user.userId !== excludedUser.userId)){
        user.socket.emit(msg,payload)
        }
    }
)};

//broadcastChatmsg(msg):void{}

correctGuess():void{

    if() //user guess over users


}


}

