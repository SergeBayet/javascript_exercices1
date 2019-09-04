/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /*
	Dans la console, pour chaque nombre entre 1 et 100 : affiche "fizz" si le nombre est multiple de 3, 
	"buzz" s'il est multiple de 5, "fizzbuzz" s'il est multiple de 3 ET 5, ou simplement le nombre si 
	aucun cas ne correspond. 
	*/
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log("fizzbuzz");
      } else {
        console.log("fizz");
      }
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
})();
