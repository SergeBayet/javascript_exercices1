/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  var max = 100;
  var min = 1;
  var numberToGuess = Math.floor(Math.random() * (+max - +min)) + +min;

  var continueLoop = true;
  var guessed;
  var counter = 0;
  while (continueLoop) {
    guessed = prompt(
      "Number of guesses : " + counter + "\n\rGuess the number : "
    );
    counter++;
    if (guessed < numberToGuess) {
      alert("Too low!");
    } else if (guessed > numberToGuess) {
      alert("Too high!");
    } else {
      alert("Good guess!!");
      continueLoop = false;
    }
  }
})();
