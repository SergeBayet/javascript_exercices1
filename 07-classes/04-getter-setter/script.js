/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname)
        {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + ' ' + this.lastname;
        }
        set name(wholeName) {
            let compounds = wholeName.split(' ');
            this.firstname = compounds[0];
            this.lastname = compounds[1];
        }
    }
    document.getElementById("run").addEventListener('click', () => { 
        a = new Person("Serge", "Bayet");
        console.log(a.name);
        a.name = "Frédéric Chopin";
        console.log(a);
    });
})();
