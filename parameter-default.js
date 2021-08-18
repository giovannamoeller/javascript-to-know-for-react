function sum(a, b = 0) {
    return a + b;
}

console.log(sum(2, 3));
console.log(sum(2));

// It's the same as:

const sum = (a, b = 0) => a + b;

// It's the same as:
function add(a, b) {
    b = b === undefined ? 0 : b; 
    return a + b;
}

function diff(a = 5, b) {
    return a - b;
}

console.log(diff(4, 1));
console.log(diff(undefined, 5)); // weird!!!!!  