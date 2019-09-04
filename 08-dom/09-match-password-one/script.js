/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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
            input_pass_one.setAttribute('style','border: .1rem solid red');
            input_pass_two.setAttribute('style','border: .1rem solid red')

        }
        else
        {
            input_pass_one.setAttribute('style','border: .1rem solid green')
            input_pass_two.setAttribute('style','border: .1rem solid green')

        }
        console.log(pass_one,pass_two);
    });
})();
