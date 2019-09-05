/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
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

  partone.addEventListener("click", () => {
    data_min = partone.getAttribute("data-min");
    data_max = partone.getAttribute("data-max");
    number = parseInt(partone.innerText) + 1;
    if (number > data_max) {
      number = data_min;
    }
    partone.innerHTML = number;
    display();
  });

  partfour.addEventListener("click", () => {
    data_min = partfour.getAttribute("data-min");
    data_max = partfour.getAttribute("data-max");
    number = parseInt(partfour.innerText) + 1;
    if (number > data_max) {
      number = data_min;
    }
    partfour.innerHTML = ("0" + number).slice(-3);
    display();
  });

  parttwo.addEventListener("click", () => {
    data_min = parttwo.getAttribute("data-min");
    data_max = parttwo.getAttribute("data-max");
    number = parseInt(parttwo.innerText) + 1;
    if (number > data_max) {
      number = data_min;
    }
    parttwo.innerHTML = ("0" + number).slice(-3);
    display();
  });

  partthree.addEventListener("click", () => {
    data_min = partthree.getAttribute("data-min");
    data_max = partthree.getAttribute("data-max");
    number = parseInt(partthree.innerText) + 1;
    if (number > data_max) {
      number = data_min;
    }
    partthree.innerHTML = ("0" + number).slice(-3);
    display();
  });

  function display() {
    document.getElementById("target").innerHTML =
      "+" +
      partone.innerHTML +
      parttwo.innerHTML +
      partthree.innerHTML +
      partfour.innerHTML;
  }
})();
