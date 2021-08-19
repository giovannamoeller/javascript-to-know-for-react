const user = {
    name: 'Giovanna',
    address: {
        street: 'Av. Paulista'
    }
}

const streetName = user?.address?.street;
console.log(streetName);

// It's the same as:
console.log(user && user.address.street);

// optional chaining does not replace checks like if (typeof options == "undefined")

// React:

function UserProfile({user}) {
    return (
      <div>
        <h1>{user.name}</h1>
        <strong>{user.bio?.slice(0, 50)}...</strong>
      </div>
    )
}

// && -> React
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
}