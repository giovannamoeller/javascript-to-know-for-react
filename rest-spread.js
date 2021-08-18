// Collection 

const arr = [3, 4, 5];
const maxValue = Math.max(...arr);
console.log(maxValue); // 5

// It's the same as:

Math.max.apply(null, arr);

const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
        e: 'e from obj1',
        f: 'f from obj1',
    },
}

const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
        g: 'g from obj2',
        h: 'g from obj2',
    },
}

const obj3 = {...obj1, ...obj2};
console.log(obj3);

// It's the same as:
console.log(Object.assign({}, obj1, obj2));

function add(first, ...rest) {
    return rest.reduce((sum, next) => sum + next, first);
}

// It's the same as:
function add() {
    const first = arguments[0];
    const rest = Array.from(arguments).slice(1);
    return rest.reduce((sum, next) => sum + next, first);
}

console.log(add(0, 2, 3, 5));