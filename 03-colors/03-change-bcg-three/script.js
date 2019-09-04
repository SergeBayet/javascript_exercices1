/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    let number = Math.round(Math.random() * 16777215);
    let color = "000000" + number.toString(16);
    color = "#" + color.slice(-6);
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
  });
})();
