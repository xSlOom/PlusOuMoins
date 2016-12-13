# PlusOuMoins

Voici une version basic du jeu "Plus ou Moins".

Par défaut, vous devez deviner entre 1 et 100 mais vous pouvez changer ces valeurs dans le fichier JS. 

/* 
  1: Min
  100 : Max
*/

var nombre  = Math.floor(1 + (100 - 1 + 1) * Math.random());

Lorsque vous avez fait 5 essais sans avoir trouvé le nombre correcte, un indice va apparaitre avec le premier chiffre du nombre et si vous faites + de 10 essais, vous perdez la partie.

Une liste dynamique a été ajouté pour afficher la liste des nombres que vous avez déjà entré. Si vous avez déjà entré un nombre, vous aurez automatiquement une erreur mais cela ne comptera pas comme un "essai".

Si il y a des bugs/erreurs, n'hésitez pas à les signaler! Cela pourrait m'aider à réparer mes propres erreurs.
