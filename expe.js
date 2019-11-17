function guessGame()
{
    var a=0;
    var n = Math.floor(Math.random()*100+1);
    console.log(n);
while(a<=2)
{
    var guess = parseInt(prompt("Guess the number:"));
    if( guess == n)
    {
        console.log("Your guess is correct");
        break;
        
    }
    else
    {
    console.log("try again");
    }
    a++;
}
var answer = prompt("Do you want to play again??");
if(answer == "yes")
{
    guessGame();
}
}
guessGame();
