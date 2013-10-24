//This is the javaScript for the rock, paper scissor game
confirm('Er du klar?');

var exp = prompt("Hvor mange gange har du spillet spillet?");


if(exp < 1) 
{
    alert('Type "sten", "papir" eller "saks" og se om du kan slå computeren!');
} else 
{
    alert("Se om du kan slå computeren!");
}

var player = function() {

var player = prompt("Vælger du sten, papir eller saks?");

var computer = Math.random(); 

if (player === "sten" || player === "papir" || player === "saks") 
{
 
  
    if (computer >= 0 && computer <= 0.33) 
    {
        if (player === "sten") 
        {
            alert(computer + " " + "STEEEN!!!!" + " " + "Spillet står lige!");
        }
        else if (player === "papir")
        {
            alert(computer + " " + "Sten!!!!" + " " + "PAPIR slår Sten!" + " " + "DU VIIIINDER SPIIILEEEET!!!!");        
        }
        else
        {
            alert(computer + " " + "STEEEN!!!!" + " " + "STEN slår Saks!" + " " + "A.I VIIIINDER SPIIILEEET!!!!");
        }
    }    
    else if (computer >= 0.34 && computer <= 0.66) 
    {
        if (player === "sten") 
        {
        alert(computer + " " + "PAAAPIIIR!!!!" + " " + "PAPIR slår Sten!" + " " + "A.I VIIIINDER SPIIILEEET!!!!");
        }
        else if (player === "papir")
        {
            alert(computer + " " + "PAAAPIIIR!!!!" + " " + "Spillet står lige!");
        }
        else
        {
            alert(computer + " " + "Papir!" + " " + "SAKS slår Papir!" + " " + "DU VIIIINDER SPIIILEEEET!!!!");
        }
    }
    else
    {
        if (player === "sten") 
        {
        alert(computer + " " + "Saks!" + " " + "STEN slår Saks!" + " " + "DU VIIIINDER SPIIILEEEET!!!!");
        }
        else if (player === "papir")
        {
            alert(computer + " " + "SAAAKS!!!!" + " " + "SAKS slår Papir!" + " " + "A.I VIIIINDER SPIIILEEET!!!!");
        }
        else 
        {
            alert(computer + " " + "SAAAKS!!!!" + " " + "Spillet står lige!");
        }
    }
}

var feedback = prompt("På en skala fra 1 - 10 hvor meget synes du om spillet?");

if (feedback > 8 ) 
{
    alert("Det her er kun begyndelsen på mit spil emperie. Stay tuned for mere!");
} else {
    alert("Jeg knoklede på det her spil, og du gav mig den score?! Nerven! Vent bare!");
}
}; 

