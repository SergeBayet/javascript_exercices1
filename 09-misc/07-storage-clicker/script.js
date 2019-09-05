/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  counter = localStorage.getItem("counter");
  if (counter == null) {
    localStorage.setItem("counter", "0");
    counter = 0;
  }
  document.getElementById("target").innerHTML = counter.toString();

  document.getElementById("increment").addEventListener("click", () => {
    counter = localStorage.getItem("counter");
    counter++;
    localStorage.setItem("counter", counter.toString());
    document.getElementById("target").innerHTML = counter.toString();
  });
})();
