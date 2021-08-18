const values = {
    x: 5,
    y: 8,
    z: 3,
}

function calculate({x, y, z}) {
    return x + y + z;
}
calculate(values);

// It's the same as:
function calculate(values) {
    const {x, y, z} = values;
    return x + y + z;
}
calculate(values);

// It's the same as:
function calculate(values) {
    const x = values.x;
    const y = values.y;
    const z = values.z;
    return x + y + z;
}
calculate(values);

// React:
function UserGitHubImg({ username = 'ghost', ...props }) {
    return <img src={`https://github.com/${username}.png`} {...props} />
}

function nestedArrayAndObject() {

    // refactor this to a single line of destructuring...

    const info = {
      title: 'Once Upon a Time',
      protagonist: {
        name: 'Emma Swan',
        enemies: [
          {name: 'Regina Mills', title: 'Evil Queen'},
          {name: 'Cora Mills', title: 'Queen of Hearts'},
          {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
          {name: 'Zelena', title: 'The Wicked Witch'},
        ],
      },
    }

    const { title, protagonist: { name: protagonistName, enemies: [, , { name: enemyName, title: enemyTitle, }] } } = info;

    /*const {
        title,
        protagonist: {
            name: protagonistName,
            enemies: [, , {
                name: enemyName,
                title: enemyTitle,
            }]
        }
    } = info -> multiple lines; */

    console.log(`${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`);
}

nestedArrayAndObject();

const [a, b] = [10, 20];
console.log(a, b); // 10, 20