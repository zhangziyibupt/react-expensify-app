// Object destructuring

// const person = {
//     name: 'ziyi',
//     age: 26,
//     location: {
//         city: 'mtv',
//         temp: 92
//     }
// };

// const { name: firstName = 'anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego in the enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
}

const { name: publisherName = 'self-published' } = book.publisher;
console.log(publisherName);


// Array destructuring
const address = ['138 Holy Ct', 'MTV', 'CA', '94043'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

