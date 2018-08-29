import database from '../firebase/firebase';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Ziyi Zhang',
            age: 28
        });
        // reject('Something went wrong!');
    }, 5000);
});

console.log('before');

// register then callback, which will be called when resolved,
// register catch callback, which will be triggered when rejected.
promise.then((data) => {
    console.log('1', data);

    // return keyword is important
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');

database.ref('expenses/-LKzABiThiJjkOiDnLzm')
    .once('value')
    .then((snapshot) => {
        console.log(snapshot.key, snapshot.val());
    }).catch((e) => {
        console.log('Error fetching data', e);
    });