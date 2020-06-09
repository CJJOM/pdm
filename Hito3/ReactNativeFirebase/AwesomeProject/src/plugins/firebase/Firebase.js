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
    apiKey: "AIzaSyCyxTdp_6Hmt9IXwDh_hUmtzjSpWEXb5fw",
    authDomain: "guideturism2.firebaseapp.com",
    databaseURL: "https://guideturism2.firebaseio.com",
    projectId: "guideturism2",
    storageBucket: "guideturism2.appspot.com",
    messagingSenderId: "246789205911",
    appId: "1:246789205911:web:3c05f07f35ad4ef3569ed2"
};

firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();
export default firebase;
