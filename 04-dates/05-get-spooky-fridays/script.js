/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        year = document.getElementById("year").value;
        startDate = new Date(year + "-01-01");
        endDate = new Date(year + "-12-31");
        d = new Date(startDate);
        while(d <= endDate)
        {
            
            if(d.getDay() == 4 && d.getDate() == 13)
            {
                console.log(d);
              
            }
            d.setDate(d.getDate() + 1);

        }
    });
})();
