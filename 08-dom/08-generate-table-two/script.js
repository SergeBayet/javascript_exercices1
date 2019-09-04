/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
        for( var j = 0 ; j < 10 ; j ++)
        {
            td = document.createElement('td');
            multiplication = (i + 1) * (j + 1);
            text = document.createTextNode(multiplication.toString());
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    target.appendChild(table);
})();
