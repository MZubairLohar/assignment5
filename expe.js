//var b =(Math.floor(Math.random)*100+1);
var b = 2;
var a = ("Ready go")
var i = 2;
alert ("Game Starts now ")


//function gusNum() {
    var gusNu = prompt("type your number");

    //gusNum();
    function gameWon(){
        if ( gusNu == b){
            alert("You Won");
            }
        }
    
    function gameLost1(){
        if(gusNu != b){
            alert( "You Lost");
            
         //   alert("Try Again" + document.querySelector("p").innerHTML)
        }
    }
      gameWon();
        gameLost1();
          
