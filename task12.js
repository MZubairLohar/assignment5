/*
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
          
*/
var randomNum = Math.floor(Math.random() * 100 + 1);
        var playAgain;
        var counter = 0;
        function guessNum() {
            var userInput = prompt("Guess a number between 1 to 100");
            var i = 0;
            do {
                if (userInput === randomNum) {
                    alert("You are right, You won");
                    play_Again();
                    break;
                }
                else alert("Incorrect, Please try again");
                userInput = prompt("Guess a number between 1 to 100");
                counter++;
                i++
                if (counter === 2)
                    play_Again();
            } while (i < 2);
        }
        function play_Again() {
            counter = 0;
            alert("You Lose");
            playAgain = prompt("Do you want to play again? Yes/No");
            if (playAgain.toLowerCase() === "yes")
                guessNum();
            if (playAgain.toLowerCase() === "no")
                alert("Thank you for playing with us today.");
        }
        guessNum();

