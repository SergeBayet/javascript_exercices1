/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  var age, sexe, ville;
  do {
    age = prompt("Age :");
    sexe = prompt("Sexe :");
    ville = prompt("Ville :");
  } while (
    !confirm(
      "age : " +
        age +
        "\r\nSexe : " +
        sexe +
        "\r\nVille : " +
        ville +
        "\r\n\r\nEst-ce correct?"
    )
  );
})();
