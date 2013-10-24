//This is the javaScript for the rock, paper scissor game
confirm('Est-tu prêt à jouer?');

var exp = prompt("Combien de fois à tu déja jouer à ce jeux ?");


if(exp < 1) 
{
    alert("Type 'pierre', 'papier' or 'ciseaux' et voi ci tu sais battre l'ordi'!");
} else 
{
    alert("Voi ci tu sais battre l'ordi'!");
}

var player = function() {

var player = prompt("Tu choisi pierre, papier ou ciseaux?");

var computer = Math.random(); 

if (player === "pierre" || player === "papier" || player === "ciseaux") 
{
 
  
    if (computer <= 0.33) 
    {
        if (player === "pierre") 
        {
            alert(computer + " " + "PIEEEERRE!!!!" + " " + "C'est un juste jeux!");
        }
        else if (player === "papier")
        {
            alert(computer + " " + "PIEEEERRE!!!!" + " " + "PAPIER bats Pierre!" + " " + "TU GAAAAGNE LE JEUUUUX!!!!");        
        }
        else
        {
            alert(computer + " " + "PIEEEERRE!!!!" + " " + "PIERRE bats Ciseaux!" + " " + "AI GAAAAGNE LE JEUUUUX!!!!");
        }
    }    
    else if (computer <= 0.66) 
    {
        if (player === "pierre") 
        {
        alert(computer + " " + "PAPIEEER!!!!" + " " + "PAPIER bats Pierre!" + " " + "AI GAAAAGNE LE JEUUUUX!!!!");
        }
        else if (player === "papier")
        {
            alert(computer + " " + "PAPIEEER!!!!" + " " + "C'est un juste jeux!");
        }
        else
        {
            alert(computer + " " + "PAPIEEER!!!!" + " " + "CISEAUX bats Papier!" + " " + "TU GAAAAGNE LE JEUUUUX!!!!");
        }
    }
    else
    {
        if (player === "pierre") 
        {
        alert(computer + " " + "CISEAUUUUX!!!!" + " " + "PIERRE bats Ciseaux!" + " " + "TU GAAAAGNE LE JEUUUUX!!!!");
        }
        else if (player === "papier")
        {
            alert(computer + " " + "CISEAUUUUX!!!!" + " " + "CISEAUX bats Papier!" + " " + "AI GAAAAGNE LE JEUUUUX!!!!");
        }
        else 
        {
            alert(computer + " " + "CISEAUUUUX!!!!" + " " + "C'est un juste jeux!");
        }
    }
}

var feedback = prompt("Sur une échelle de 1 - 10 combien tu aimai le jeux?");

if (feedback > 8 ) 
{
    alert("Cesi est que le début de mon empire des joeux. Restez à l'écoute pour plus!");
} else {
    alert("J'ai trimé à se jeu et vous m'avez donné ce score là? Le nerf! Attends un peu!");
}
}; 

