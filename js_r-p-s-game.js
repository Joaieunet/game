//This is the javaScript for the rock, paper scissor game
confirm('Are you ready to play?');

var exp = prompt("How many times have you played this game before?","Type the number of times here");


if(exp < 1) 
{
    alert('Type "rock", "paper" or "scissor" and see if you can beat the computer!');
} else 
{
    alert("See if you can beat the computer!");
}

var player = function() {

var player = prompt(" Do you choose rock, paper or scissor?");

var computer = Math.random(); 


if (player === "rock" || player === "paper" || player === "scissor") 
{
 
  
    if (computer <= 0.33) 
    {
        if (player === "rock") 
        {
            alert(computer + " " + "ROOOCK!!!!" + " " + "It's a draw game!");
        }
        else if (player === "paper")
        {
            alert(computer + " " + "ROOOCK!!!!" + " " + "PAPER beats Rock!" + " " + "YOU WIIIIN THE GAAAME!!!!");        
        }
        else
        {
            alert(computer + " " + "ROOOCK!!!!" + " " + "ROCK beats Scissor!" + " " + "AI WIIIINS the GAAAME!!!!");
        }
    }    
    else if (computer <= 0.66) 
    {
        if (player === "rock") 
        {
        alert(computer + " " + "PAPEEER!!!!" + " " + "PAPER beats Rock!" + " " + "AI WIIIINS the GAAAME!!!!");
        }
        else if (player === "paper")
        {
            alert(computer + " " + "PAPEEER!!!!" + " " + "It's a draw game!");
        }
        else
        {
            alert(computer + " " + "Paper!" + " " + "SCISSOR beats Paper!" + " " + "YOU WIIIIN THE GAAAME!!!!");
        }
    }
    else 
    {
        if (player === "rock") 
        {
        alert(computer + " " + "Scissor!" + " " + "ROCK beats Scissor!" + " " + "YOU WIIIIN THE GAAAME!!!!");
        }
        else if (player === "paper")
        {
            alert(computer + " " + "SCISSOOOR!!!!" + " " + "SCISSOR beats Paper!" + " " + "AI WIIIINS the GAAAME!!!!");
        }
        else 
        {
            alert(computer + " " + "SCISSOOOR!!!!" + " " + "It's a draw game!");
        }
    }
}

var feedback = prompt("On a scale from 1 - 10 how much did you like the game?");

if (feedback > 8 ) 
{
    alert("This is just the beginning of my game empire. Stay tuned for more!");
} else {
    alert("I slaved away at his game and you gave me that score?! The nerve! Just you wait!");
}
}; 

