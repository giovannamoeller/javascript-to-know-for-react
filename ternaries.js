const user = {
    name: 'Giovanna',
    isLoggedIn: false,
}

const message = user.isLoggedIn ? 'User is logged in!' : 'User is not logged in!';
console.log(message);

// It's the same as:
let string;
if(user.isLoggedIn) {
    string = 'User is logged in!';
} else {
    string = 'User is not logged in!';
}

console.log(string);

// React:
function UserList({users}) {
    return (
      <div>
        {users.length ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div>There are no users.</div>
        )}
      </div>
    )
  }