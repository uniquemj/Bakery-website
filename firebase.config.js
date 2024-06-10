import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAaIPZLrrNI0VhRvZ4Y7PyUF1ANi79CZJM",
    authDomain: "bavarianwebsite.firebaseapp.com",
    databaseURL: "https://bavarianwebsite-default-rtdb.firebaseio.com",
    projectId: "bavarianwebsite",
    storageBucket: "bavarianwebsite.appspot.com",
    messagingSenderId: "1002490732403",
    appId: "1:1002490732403:web:2c70aab2a547a2deca2f06"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};