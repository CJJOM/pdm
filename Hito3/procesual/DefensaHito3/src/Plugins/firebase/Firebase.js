import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
/*import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} from 'react-native-dotenv';*/

const firebaseConfig = {
    apiKey: "AIzaSyC5shTWh8hHs6YtfJmCLleD_rTMHMx5Nyw",
    authDomain: "defensah3pdm.firebaseapp.com",
    databaseURL: "https://defensah3pdm.firebaseio.com",
    projectId: "defensah3pdm",
    storageBucket: "defensah3pdm.appspot.com",
    messagingSenderId: "961127200611",
    appId: "1:961127200611:web:eaaec4d1b609f69245c556"
};

const fire = firebase.initializeApp(firebaseConfig);
//export const firestore = firebase.firestore();
export default fire;
