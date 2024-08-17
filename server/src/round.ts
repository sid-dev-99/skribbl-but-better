import words from '../constants/word';
import User from "./user";



class Round{

    word:string;
    launchTime:number;
    leftTime:number;
    activeUser:User;
    currentUserscore:number;
    kickVotes:number;

    constructor(){
        this.word = this.generateRandomword();
        this.launchTime = Date.now();
        this.leftTime =  this.word.length * 5000
        this.currentUserscore = 0;
    }


    generateRandomword(){
        const randomIndex = Math.floor(Math.random()*words.length);
        return words[randomIndex]
    }




}