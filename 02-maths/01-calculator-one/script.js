/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  var x = parseInt(document.getElementById("op-one").value);
  var y = parseInt(document.getElementById("op-two").value);
  console.log(x, y);
  document.getElementById("addition").addEventListener("click", () => {
    // perform an addition
    alert(x + y);
  });

  document.getElementById("substraction").addEventListener("click", () => {
    // perform an substraction
    alert(x - y);
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    // perform an multiplication
    alert(x * y);
  });

  document.getElementById("division").addEventListener("click", () => {
    // perform an division
    alert(x / y);
  });
})();
