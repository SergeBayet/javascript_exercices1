/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let url = document.getElementById("source").getAttribute("data-image");
    img = document.createElement("img");
    attr = document.createAttribute("src");
    attr.value = url;
    img.setAttributeNode(attr);
    target = document.getElementById("target");
    target.appendChild(img);
    material = document.querySelector(".material");
    source = document.getElementById("source");
    material.removeChild(source);
})();
