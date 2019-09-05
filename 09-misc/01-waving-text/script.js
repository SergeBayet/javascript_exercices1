/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  count = 20;
  rawText = document.getElementById("target").innerText;
  target = document.getElementById("target");
  target.innerHTML = "";
  for (var i = 0; i < rawText.length; i++) {
    waveChar = rawText.charAt(i);

    if (waveChar == " ") {
      waveChar = "&nbsp;";
    }
    wave = document.createElement("span");
    wave.innerHTML = waveChar;
    wave.setAttribute("class", "wave");
    wave.setAttribute("style", "display: inline-block");
    wave.animate(
      [
        // keyframes
        { transform: "translateY(0px)" },
        { transform: "translateY(30px)" }
      ],
      {
        // timing options
        duration: 600,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease",
        delay: parseInt((-(count - i) * 600) / count)
      }
    );
    target.appendChild(wave);
  }
})();
