import { signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth, googleProvider } from "../../firebase/firebase.config";


export const signInWithGoogle = async () => {
    try {
        const payload = await signInWithPopup(auth, googleProvider);
        return payload;
    }
    catch (error) {
        return console.log(error.message);
    }
};

// ------------------------

export const signOutWithGoogle = async () => {
    try {
        await signOut( auth );
    }
    catch (error) {
        return console.log(error.message);
    }
}

// ------------------------


export const createUserProfileDocumentInFirebase = async ( user, additionalData ) => {
    if( !user ) {
        return;
    }
    else {
        const userDoc = doc(db, `users/${user.uid}`);
        // According to the uid property of our firebase auth user obj (the one
        // saved in our Redux store), we know whether it's a new user that's logging-in,
        // or an old one already registered. If it's a new one, we create a small object
        // (name, email, createdAt) in our Firestore DB (users), based on that data

        const userSnapShot = await getDoc( userDoc );

        if( !userSnapShot.exists() ) {
            // If the user Snaphot doesn't exist, we create it...
            // we create a new User on the DB based on our user object

            const { uid, displayName, email } = user;
            const createdAt = new Date();

            try {
                await setDoc( userDoc, {
                    id: uid,
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }
            catch( error ) {
                console.log("Error creating user!", error.message);
            }

            return userDoc;
        }
    }
}


