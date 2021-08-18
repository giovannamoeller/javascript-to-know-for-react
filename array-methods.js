const users = [
    {
        id: 1,
        name: 'Giovanna',
        languages: [
            'Javascript',
            'Typescript',
            'Swift',
            'C'
        ]
    },

    {
        id: 2,
        name: 'Leonardo',
        languages: [
            'Javascript',
            'Typescript',
            'Python',
            'Java',
            'Dart',
            'Golang',
            'Kotlin'
        ]
    },

    {
        id: 3,
        name: 'Mario',
        languages: [
            'C#',
            'C'
        ]
    },

    {
        id: 4,
        name: 'Diego',
        languages: [
            'Python',
            'Javascript'
        ]
    },

]

users.find(user => user.name === 'Giovanna');
// { id: 1, name: 'Giovanna', languages: [ 'Javascript', 'Swift', 'C' ] }

users.some(user => user.languages.includes('Assembly'));
// false

users.some(user => user.languages.includes('Python'));
// false

users.every(user => user.languages.includes('C#'));
// false

users.map(user => user.name);
// ['Giovanna', 'Leonardo', 'Mario', 'Diego']

users.filter(user => user.languages.includes('Javascript'));
// all objects except Mario, from id: 3 

users.find(user => user.name === 'Giovanna');
// { id: 1, name: 'Giovanna', email: 'giovanna@gmail.com' }

