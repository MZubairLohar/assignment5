var b =(Math.floor(Math.random)*100+1);
var a = ("Ready go")
alert ("Game Starts now ")

function gusNum() {
var gusNu = prompt("type your number");}
gusNum();
function gameWon(){
    if ( gusNum == b){
        alert("You Won");
        return gusNum;}
    }

function gameLost1(){
    if(gusNum != b){
        alert( "You Lost");
        
        

        alert("Try Again" + document.querySelector("p").innerHTML)
    }
}
function looping(){
    if(gameLost1()){
        for(i=3;i<0 ;i--){
        return gusNum();}
        
    }
}

    gameWon();
        
        gameLost1();
        looping();
  




