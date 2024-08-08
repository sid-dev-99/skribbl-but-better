import { MAX_PLAYERS } from '../../constants/config';
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


removeUser():void{}


// remove user


}