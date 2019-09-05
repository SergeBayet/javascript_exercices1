/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  partone = document.getElementById("part-one");
  parttwo = document.getElementById("part-two");
  partthree = document.getElementById("part-three");
  partfour = document.getElementById("part-four");

  fixpartone = document.getElementById("fix-part-one");
  fixparttwo = document.getElementById("fix-part-two");
  fixpartthree = document.getElementById("fix-part-three");
  fixpartfour = document.getElementById("fix-part-four");
  myVar = setInterval(slot, 30);

  document.querySelectorAll(".field button").forEach(element => {
    element.addEventListener("click", () => {
      element.innerText = element.innerText == "Stop" ? "Start" : "Stop";
    });
  });

  function slot() {
    document.querySelectorAll(".field button").forEach(element => {
      if (element.innerText == "Stop") {
        data_min = element.previousElementSibling.getAttribute("data-min");
        data_max = element.previousElementSibling.getAttribute("data-max");
        number = parseInt(element.previousElementSibling.value) + 1;
        if (number > data_max) {
          number = data_min;
        }
        element.previousElementSibling.value = ("000" + number).slice(
          -data_max.length
        );

        display();
      }
    });
  }
  function display() {
    document.getElementById("target").innerHTML =
      "+" +
      partone.value.toString() +
      parttwo.value.toString() +
      partthree.value.toString() +
      partfour.value.toString();
  }
})();
