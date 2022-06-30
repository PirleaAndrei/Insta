import firebase from 'firebase'

const config :{
    apiKey:string;
    authDomain:string;
    projectId:string;
    storageBucket:string;
    messagingSenderId:string;
    appId:string;
} = {
    apiKey: "AIzaSyC444-sBLXB9_2IzWzEoppqShBPJgI2TSk",
    authDomain: "instaclone-fdcd9.firebaseapp.com",
    projectId: "instaclone-fdcd9",
    storageBucket: "instaclone-fdcd9.appspot.com",
    messagingSenderId: "131512655405",
    appId: "1:131512655405:web:413e09aa71db5fa7e722a4"
  }; 

 
const firebaseInit=firebase.initializeApp(config);

const fieldValue=firebaseInit.firestore();
  export {firebaseInit, fieldValue};
