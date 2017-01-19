<h1>More or Less</h1>

<em>This is a basic version of the "More or less" game where you have to guess the number!</em>

By default, you have to guess the number between 1 and 100 but you can change those valeurs in the JS file.

```
var nombre  = Math.floor(1 + (100 - 1 + 1) * Math.random()); // 1 : minimum; 100: maximum;
```

Lorsque vous avez fait 5 essais sans avoir trouvé le nombre correcte, un indice va apparaitre avec le premier chiffre du nombre et si vous faites + de 10 essais, vous perdez la partie.

Une liste dynamique a été ajouté pour afficher la liste des nombres que vous avez déjà entré. Si vous avez déjà entré un nombre, vous aurez automatiquement une erreur mais cela ne comptera pas comme un "essai".

Si il y a des bugs/erreurs, n'hésitez pas à les signaler! Cela pourrait m'aider à réparer mes propres erreurs.
