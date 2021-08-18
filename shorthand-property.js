const myName = 'Giovanna';
const age = 20;
const occupation = 'Developer';

console.log({
    myName,
    age,
    occupation
});

// It's the same as:
console.log({
    myName: myName,
    age: age,
    occupation: occupation,
});

// React:
function Counter({initialCount, step}) {
    const [count, setCount] = useCounter({initialCount, step})
    return <button onClick={setCount}>{count}</button>
}