function endGame(nombre, essais) { // show the victory message
    document.getElementById("message").innerHTML    =   "Congratulations, the number was " + nombre + ". You have completed the game in " + essais + " tries.";
}

function launchGame() { // run the game
    
    var saisie;
    var nombres	= [];
    var nombre  = Math.floor(1 + (100 - 1 + 1) * Math.random());
    var essais  = 0;
    var indice  = false;
    var end     = false;
    
    document.getElementById("valid").addEventListener("click", function() {
        saisie  = parseInt(document.getElementById("number").value);
        if (isNaN(saisie) == false) {
            if ((essais > 5) && (indice == false) && (saisie !== 0)) { // a little clue :)
                document.getElementById("message").innerHTML = "You drool? A little clue! The number starts with " + nombre.toString().substr(0, 1);
                indice  = true;
            } else {
		if (essais == 10) { // if the number of tries is 10, the game is over
			document.getElementById("message").innerHTML    = "You lose! The number was " + nombre + ".";
			document.getElementById("valid").disabled   	= true;
		} else {
			if (nombres.indexOf(saisie) != -1) { // si on a trouvé le nombre dans le tableau; 
				document.getElementById("message").innerHTML    = "You have already said that number.";
			}
			else if (saisie > nombre) { // if the number is more than the answer
				essais++;
				nombres.push(saisie);
				document.getElementById("message").innerHTML    =   "It's less than what you think.";
			} 
			else if (saisie < nombre) { // if the number is less than the answer
				essais++;
				nombres.push(saisie);
				document.getElementById("message").innerHTML    =   "It's more than what you think.";
			} else { // User found the correct answer, so game is over and we show the victory message.
				end = true;
			}   
		}
            }
        } else {
            document.getElementById("message").innerHTML    =   "Number must be numeric.";
        }
		document.getElementById("essai").innerHTML	= "Used numbers : " + (nombres.length == 0 ? "Aucun" : nombres.join(", ")) + " | Trie(s) : " + essais + "/10";
        if (end == true) { // si le joueur a trouvé le nombre, on désactive le bouton et on affiche le message de victoire
            document.getElementById("valid").disabled   = true;
            endGame(nombre, essais);    
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){ // document is ready so we can start the game
    launchGame(); // call the function to play the game
});
