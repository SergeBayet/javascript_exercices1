/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener('click', () => { 
        let numbers = [];
        let sum = 0;
        let minimum = 101;
        let maximum = 0;
        for(var i = 0 ; i < 10 ; i++)
        {
            
            numbers[i] = getRandomIntInclusive(1, 100);
            minimum = Math.min(numbers[i], minimum);
            maximum = Math.max(numbers[i], maximum);
            
            sum += numbers[i];
            document.getElementById('n-' + (i + 1)).innerHTML = numbers[i];
        }
        
        var average = sum / numbers.length;
        document.getElementById('min').innerHTML = minimum;
        document.getElementById('max').innerHTML = maximum;
        document.getElementById('average').innerHTML = average;
        document.getElementById('sum').innerHTML = sum;
        console.log(numbers);
    });
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
})();
