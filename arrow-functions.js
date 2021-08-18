const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const returnFive = () => 5;

// It's the same as:

function sum(a, b) {
    return a + b;
}

function returnFive() {
    return 5;
}

function diff(a, b) {
    return a - b;
}

// React:
function Users({users}) {
    return (
        <ul>
            {users.map(user => {
                return ( // or user => () -> without return
                    <li key={user.id}>
                        <span>{user.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}