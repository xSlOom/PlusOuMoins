function endGame(nombre, essais) { // montrer le message de victoire
    document.getElementById("message").innerHTML    =   "Bravo, le nombre &eacute;tait " + nombre + ". Tu as complet&eacute; le jeu en " + essais + " essais.";
}

function launchGame() { // lancer le jeu
    
    var saisie;
	var nombres	= [];
    var nombre  = Math.floor(1 + (100 - 1 + 1) * Math.random());
    var essais  = 0;
    var indice  = false;
    var end     = false;
    
    document.getElementById("valid").addEventListener("click", function() {
        saisie  = parseInt(document.getElementById("number").value);
        if (isNaN(saisie) == false) {
            if ((essais > 5) && (indice == false) && (saisie !== 0)) { // un petit indice seulement si c'est pas égale à la valeur initial (0)
                document.getElementById("message").innerHTML = "Tu en baves? Un petit indice ! Le nombre commence par " + nombre.toString().substr(0, 1);
                indice  = true;
            } else {
				if (essais == 10) { // si le nombre d'essais est 10, on arrête le jeu.
					document.getElementById("message").innerHTML    = "Vous avez perdu ! Le nombre à deviner était " + nombre + ".";
					document.getElementById("valid").disabled   	= true;
				} else {
					if (nombres.indexOf(saisie) != -1) { // si on a trouvé le nombre dans le tableau; 
						document.getElementById("message").innerHTML    = "Vous avez déjà dit ce nombre!";
					}
					else if (saisie > nombre) { // si la saisie est plus grande que le nombre tiré au hasard
						essais++;
						nombres.push(saisie);
						document.getElementById("message").innerHTML    =   "C'est moins que ce que tu crois!";
					} 
					else if (saisie < nombre) { // si la saisie est plus petite que le nombre tiré au hasard
						essais++;
						nombres.push(saisie);
						document.getElementById("message").innerHTML    =   "C'est plus que ce que tu crois!";
					} else { // l'utilisateur a trouvé la bonne réponse, donc fin du jeu et affichage du message de victoire.
						end = true;
					}   
				}
            }
        } else {
            document.getElementById("message").innerHTML    =   "Le nombre doit être numérique seulement.";
        }
		document.getElementById("essai").innerHTML	= "Nombre(s) utilisé(s) : " + (nombres.length == 0 ? "Aucun" : nombres.join(", ")) + " | Nombre d'essais : " + essais + "/10";
        if (end == true) { // si le joueur a trouvé le nombre, on désactive le bouton et on affiche le message de victoire
            document.getElementById("valid").disabled   = true;
            endGame(nombre, essais);    
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){ // le document est prêt donc on peut démarrer le jeu! c:
    launchGame(); // appeler la fonction pour jouer le jeu
});
