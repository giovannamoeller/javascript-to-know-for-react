// Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

const myName = 'Giovanna'; // external (global variable is not a good practice)

function printName() { // another scope
    console.log(`Hey, ${myName}!`); // available in this function
}
// this scope has access to global scope

printName();

// Closure

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer variable: ${outerVariable}`);
        console.log(`Inner variable: ${innerVariable}`); // inner function has access to outside function, even if outer function is not available anymore.
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

const add = (function() {
    let cont = 0;
    return function() {
        cont++;
        return cont;
    }
})();

add();
add();
add(); // cont is now 3
