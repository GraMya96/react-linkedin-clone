import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

/* Our web app's Firebase configuration */
const config = {
    apiKey: "AIzaSyA2KyClgBr2D19BYZDFQOZJzqkclPlvu94",
    authDomain: "react-linkedin-clone-542a5.firebaseapp.com",
    projectId: "react-linkedin-clone-542a5",
    storageBucket: "react-linkedin-clone-542a5.appspot.com",
    messagingSenderId: "214816267659",
    appId: "1:214816267659:web:68e47b76b321dc2c24238e"
};

/* Firebase Init */
const app = initializeApp( config );
const db = getFirestore( app );
const auth = getAuth( app );
const storage = getStorage( app );
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters( {
    prompt: 'select_account'
} );

export const convertCollectionSnapshotToArray = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
        return doc.data();
    });

    // We need an array of objects to use all the map methods:
    return transformedCollection;
}

export { app, db, auth, storage, googleProvider };
