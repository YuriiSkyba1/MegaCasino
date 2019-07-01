"use strict";
//////........Class_User........//////
class User {
constructor (name,money){
    
    this.name = name;
    this.money = money;
    if(money < 0){
        console.log("Crash because your bank lower than 0 and equal"+" " +"//Check bank <0" + " "+money)
    }
}


static play(){
    return Math.floor(Math.random() * (999 - 100) + 100);
}

}
let user = new User ("Yura",1000);
let user2 = new User ("Victor",-1000);
    console.log(user);
//////........Class_Casino........//////
class Casino{ 
    constructor (name,bank){
    this.name=name;
    this.bank=bank;
    }
    

}
let casino = new Casino("777",30000);
    console.log(casino);
//////........Class_CameMachine........//////
class GameMachine{ 
    
    
constructor (number){
    this.number = number;
}
get totalGetMoney(){
    return `${this.total}`;
}
getMoney(cash){
    this.cash=cash;
}
takeMoney(sum){
   this.sum=sum ;
}
 static play(){
    return Math.floor(Math.random() * (999 - 100) + 100);
}

}
let gameMachine = new GameMachine(1)
let cahce;
let x = User.play()//.toString();
let y = GameMachine.play()//.toString();
//let mas1= x.split('').map(function(num){return num;});//спроба зробити так але не вийшло
//let mas2= y.split('');
let b = Math.floor(x/100);
let c = x-b*100; 
let d = Math.floor(c/10); 
let e = c-d*10; 
let f = Math.floor(y/100);
let h = y-f*100;
let k = Math.floor(h/10);
let m = h-k*10; 
if (b==f&&d==k||b==f&&e==m||d==k&&e==m){
    console.log(user.money*2);
    console.log("2 digits coincided");
}
else if(b==f&&d==k&&e==m){
    console.log(user.money*3);
    console.log("3 digits coincided");
}
else {
    console.log("you lose");
}

/*for (let i = 0; i< mas1.length;i++){// є помилка тому вирішив написати простий код вручну а не циклом
cahce = mas1[i];
for (let j = 0; j<mas2.length;j++){
    if(cahce=mas2[j]){
        console.log("збіг"+cahce);
        break;
    }
}
}*/
    console.log("User random number - "+x);
    console.log("GameMachine random number - "+y);
    console.log(b,d,e);
    console.log(f,k,m);

//////........Class_SuperAdmin........//////
 class SuperAdmin extends User {
  
    
    createCasino(Casino) {
    this.Casino=Casino;
    }


    createBankCasino(bank){
   this.bank=bank;
   }
// НЕ ПРАЦЮЄ
  /*  
   takeMoney(){
   super.createBankCasino();
    }
  */
    giveMoney(){

    }
    deleteGameMachine(){
    gameMachine=null;
    }
}


let Admin= new SuperAdmin("boss",10000000);
Admin.createCasino("sad");
Admin.createBankCasino(2131231);
//Admin.deleteGameMachine();//delete machine
console.log(Admin)

