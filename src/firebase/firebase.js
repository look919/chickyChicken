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


//  database.ref('menu/sauces').push({
//      id: 30,
//      title: 'SOS SŁODKO-KWAŚNY',
//      description: "",
//      prize: 1.95,
//      url: "https://firebasestorage.googleapis.com/v0/b/chickychicken-e6c82.appspot.com/o/sosy.jpg?alt=media&token=0b6b95ba-d6a4-4729-b79c-fee354d9ecc8"
// })



export { firebase, database as default };