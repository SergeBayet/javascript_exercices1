/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    img = document.querySelector('img');
    var hover_url = img.getAttribute("data-hover");
    var url = img.getAttribute("src");

    img.onmouseover = () => {
        img.setAttribute("src", hover_url);
    };
    img.onmouseout = () => {
        img.setAttribute("src", url);
    }; 

})();
