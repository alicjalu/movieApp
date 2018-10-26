import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBjVdgrY9iDhxazuywf2-MpVi7nRb1YFfM",
    authDomain: "film-base-32989.firebaseapp.com",
    databaseURL: "https://film-base-32989.firebaseio.com",
    projectId: "film-base-32989",
    storageBucket: "film-base-32989.appspot.com",
    messagingSenderId: "431133884937"
};
firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true });

export const db = fire;