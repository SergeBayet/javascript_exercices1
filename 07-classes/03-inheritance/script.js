/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return this.constructor.greeting() + '! I\'m ' + this.name + '!';
        }
    }
    class Cat extends Animal {
        
        constructor(name)
        {
            super();
            this.name = name;
            
        }
        static greeting() {
            return 'Miaou Miaou';
        }
    }
    class Dog extends Animal {
        
        constructor(name)
        {
            super();
            this.name = name;
            
        }
       static greeting() {
           return "Waouh Waouh";
       }
    }

    a = new Cat('Kitty');
    b = new Dog('Medor');
    console.log(a.sayHello());
    console.log(b.sayHello());
    // your code here
})();
