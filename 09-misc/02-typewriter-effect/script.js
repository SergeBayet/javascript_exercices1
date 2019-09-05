/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  rawText = document.getElementById("target").innerText;
  target = document.getElementById("target");
  target.innerHTML = "";

  var l = rawText.length;
  var current = 0;
  var time = 100;
  var click1 = new Audio("click3.mp3");
  var write_text = function() {
    target.innerHTML += rawText[current];
    click1.pause();
    click1.currentTime = 0;
    click1.play();

    if (current < l - 1) {
      current++;
      time = Math.floor(Math.random() * 200 + 50);
      setTimeout(function() {
        write_text();
      }, time);
    } else {
      click1.stop();
      return true;
    }
  };
  setTimeout(function() {
    write_text();
  }, time);
})();
