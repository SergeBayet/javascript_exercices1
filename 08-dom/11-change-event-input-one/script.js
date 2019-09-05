/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("pass-one").addEventListener("input", () => {
    counter = document.getElementById("counter");
    inputValue = document.getElementById("pass-one").value;

    if (inputValue.length >= 10) {
      inputValue = inputValue.substring(0, 10);
      document.getElementById("pass-one").value = inputValue;
    }
    len = inputValue.length;
    strlen = len + "/10";
    counter.innerHTML = strlen;
  });
})();
