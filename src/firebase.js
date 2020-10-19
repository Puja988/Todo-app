import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoh69APhqru5zn0BhwDPWdgombvBoDDXM",
    authDomain: "todo-pp-58def.firebaseapp.com",
    databaseURL: "https://todo-pp-58def.firebaseio.com",
    projectId: "todo-pp-58def",
    storageBucket: "todo-pp-58def.appspot.com",
    messagingSenderId: "287495546196",
    appId: "1:287495546196:web:a77dea354de548845054c1",
    measurementId: "G-8GYQ9SX34L"
}); 

const db = firebaseApp.firestore();

export default db;