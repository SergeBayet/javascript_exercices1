/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("pass-one").addEventListener("input", () => {
    indicator = document.getElementById("validity");
    inputValue = document.getElementById("pass-one").value;

    validation = validate(inputValue);
    console.log(validation);
    indicator.innerHTML = validation ? "Ok" : "Pas ok";
  });
  function validate(pwd) {
    let returnValue = false;
    if (pwd.length >= 8) {
      let nDigits = 0;
      for (var i = 0; i < pwd.length; i++) {
        car = pwd.charAt(i);
        if (!isNaN(car)) {
          nDigits++;
        }
      }
      if (nDigits >= 2) {
        returnValue = true;
      }
    }
    return returnValue;
  }
})();
