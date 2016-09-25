import Firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyBwgzgXtuLnWWcx7AMq808Q67Kdnr0WS_Q',
    authDomain: 'todo-56000.firebaseapp.com',
    databaseURL: 'https://todo-56000.firebaseio.com',
    storageBucket: 'todo-56000.appspot.com',
    messagingSenderId: "1048964196750"
  };

export default Firebase.initializeApp(config);