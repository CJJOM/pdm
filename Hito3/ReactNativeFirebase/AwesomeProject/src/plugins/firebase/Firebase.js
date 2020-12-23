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

    apiKey: "AIzaSyDNTvzL89Kn4OQbhm1I9JFzPzdNrix2g5U",
    authDomain: "guideturismcbba.firebaseapp.com",
    databaseURL: "https://guideturismcbba.firebaseio.com",
    projectId: "guideturismcbba",
    storageBucket: "guideturismcbba.appspot.com",
    messagingSenderId: "44310539389",
    appId: "1:44310539389:web:df43660e01b3a022a89514"
};

firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();
export default firebase;
