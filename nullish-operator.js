let x = null;
x = x || 10;
// problematic -> numbers/booleans 0 and false are valid value.
console.log(x);

function add(a, b) {
    a = a ?? 0; // if a isn't a valid number, then it's 0
    b = b ?? 0;
    return a + b;
}

console.log(add(null, 4));

// It's the same as:
function add(a, b) {
    a = a === null ? 0 : a;
    b = b === null ? 0 : b;
    return a + b;
}

// React:
function DisplayUserName({user}) {
    return <div>{user.name ?? 'Unknown'}</div>
}

    