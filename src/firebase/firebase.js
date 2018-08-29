import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'des 1',
//     note: 'note 1',
//     amount: '1.1',
//     createdAt: '1000'
// });

// database.ref('notes/-LKtQqr25iX3zr-7ln0l').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React'
// });

// database.ref().on('value', (snapshot) => {
//     const obj = snapshot.val();
//     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// callback not promise
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(32);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// reference to db root -- ref()
// database.ref().set({
//     name: 'Ziyi zhang',
//     age: 28,
//     job: {
//         title: 'SDE',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'mtv',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Removed');
//     }).catch((e) => {
//         console.log('Remove failed', e);
//     });