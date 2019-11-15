var b =(Math.floor(Math.random)*100+1);
//var b = 2;
var a = ("Ready go")
var i = 0;
alert ("Game Starts now ")

    var gusNu = prompt("type your number");

   
    function gameWon(){
        if ( gusNu == b){
            alert("You Won");
            }
        }
    
    function gameLost1(){
        if(gusNu != b){
            alert( "You Lost");
          
        }
    }
      gameWon();
        gameLost1();
        alert("Try Again" + document.querySelector("p1").innerHTML)
        alert("Try Again" + document.querySelector("p").innerHTML)
          


