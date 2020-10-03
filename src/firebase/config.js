import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRIOQf-rx5a-CRkhWjpgbr0TmKm-vUr14",
  authDomain: "chatbloom-14c75.firebaseapp.com",
  databaseURL: "https://chatbloom-14c75.firebaseio.com",
  projectId: "chatbloom-14c75",
  storageBucket: "chatbloom-14c75.appspot.com",
  messagingSenderId: "392911096549",
  appId: "1:392911096549:web:9f8fd53aaf09a11f5a620c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
