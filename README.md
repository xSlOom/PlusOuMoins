<h1>More or Less</h1>

<em>This is a basic version of the "More or less" game where you have to guess the number!</em>

By default, you have to guess the number between 1 and 100 but you can change those valeurs in the JS file (game.js).

```
var nombre  = Math.floor(1 + (100 - 1 + 1) * Math.random()); // 1 : minimum; 100: maximum;
```
When you do 5 tries without finding the corrct number, a clue will appear with the first digit of the number and if you do more than 10 tries, the game is over.

A dynamic list has been added to list all numbers you have submitted. If you have already enter a number, you will have automatically an error but it doesn't count as a "try".

<h1>Bugs ? Questions ?</h1>
Feel free to open an issue if there are bugs or if you have an question about to improving my code.
