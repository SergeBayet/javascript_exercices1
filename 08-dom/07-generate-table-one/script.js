/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    target = document.getElementById('target');
    table = document.createElement('table');
    
    table.setAttribute('style','border:2px');
    
    for( var i = 0 ; i < 10 ; i++ )
    {
        tr = document.createElement('tr');
        tr.setAttribute('style','height:20px');
        tr.appendChild(document.createElement('td'));
        table.appendChild(tr);
    }
    
    target.appendChild(table);
})();
