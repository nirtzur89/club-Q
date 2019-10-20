import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDhg6a54yU1YIgm_eVKtUZro6F6Ky-ZL_I',
  authDomain: 'clubq-eeaa9.firebaseapp.com',
  databaseURL: 'https://clubq-eeaa9.firebaseio.com',
  projectId: 'clubq-eeaa9',
  storageBucket: 'clubq-eeaa9.appspot.com',
  messagingSenderId: '523266661701',
  appId: '1:523266661701:web:d8492b79a31857055cf22c'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// firebase
//   .database()
//   .ref()
//   .set({
//     name: 'nir tzur'
//   })
//   .then(() => {
//     console.log('data added to firebase');
//   })
//   .catch(e => {
//     console.log('something went terribly wrong', e);
//   });
