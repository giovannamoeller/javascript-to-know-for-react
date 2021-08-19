// Async code
// Async/await -> special syntax for dealing with promises

const fs = require('fs');

setTimeout(() => {
    console.log('Waited 1 second');
    setTimeout(() => {
        console.log('Waited 2 seconds')
        setTimeout(() => {
            console.log('Waited 3 seconds')
        }, 1000)
    }, 1000)
}, 1000); // Callback Hell!

/*const btn;
btn.addEventListener('click', () => {
    // This function is a callback
});*/

fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
    // Callback function
    if(err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// Promises

const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0) {
        // succesfull
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log('Success')).catch(() => console.log('Something went wrong'));
//.then() only handles succesfull cases
//.catch() handles errors

fs.promises.readFile('./test.txt', { encoding: 'utf-8' }).then(data => console.log(data)).catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

// Async await

const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', {encoding: 'utf-8'});
        console.log(data);
    } catch(e) {
        console.error(e);
    }
}
loadFile();

const fetchPokemon = async(id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    } catch(e) {
        console.error(e);
    }
}

fetchPokemon(1);