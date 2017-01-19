<h1>More or Less</h1>

<em>This is a basic version of the "More or less" game where you have to guess the number!</em>

By default, you have to guess the number between 1 and 100 but you can change those valeurs in the JS file (game.js).

```
var nombre  = Math.floor(1 + (100 - 1 + 1) * Math.random()); // 1 : minimum; 100: maximum;
```
When you do 5 tries without finding the corrct number, a clue will appear with the first digit of the number and if you do more than 10 tries, the game is over.

Une liste dynamique a été ajouté pour afficher la liste des nombres que vous avez déjà entré. Si vous avez déjà entré un nombre, vous aurez automatiquement une erreur mais cela ne comptera pas comme un "essai".

Si il y a des bugs/erreurs, n'hésitez pas à les signaler! Cela pourrait m'aider à réparer mes propres erreurs.
