const greeting = "Hello World";
const myName = "Giovanna Moeller";

console.log(`${greeting}, ${myName}!!!`);
// It's the same as:
console.log(greeting + ', ' + myName + '!!!');

// React:
function Box({name, ...props}) {
    return <div className={`box ${name}`} {...props} />
}