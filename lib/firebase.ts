import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNpxfr54yH7dJnRXx7HYSyaBc9vGcC06Y",
    authDomain: "e-shop-cd486.firebaseapp.com",
    projectId: "e-shop-cd486",
    storageBucket: "e-shop-cd486.appspot.com",
    messagingSenderId: "683577458237",
    appId: "1:683577458237:web:3b1e00d2e22d67c4bbb454"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;