/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener( 'click', () => {
        input_pass_one = document.getElementById('pass-one');
        input_pass_two = document.getElementById('pass-two');
        pass_one = input_pass_one.value;
        pass_two = input_pass_two.value;
        if(pass_one !== pass_two)
        {
            input_pass_one.classList.add('error');
            input_pass_two.classList.add('error');

        }
        else
        {
            input_pass_one.classList.remove('error');
            input_pass_two.classList.remove('error');
            

        }
        console.log(pass_one,pass_two);
    });
})();
