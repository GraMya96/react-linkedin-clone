import { addDoc, getDocs, collection, query, where, orderBy, limit } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage, convertCollectionSnapshotToArray } from "../../firebase/firebase.config";
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from "./posts.actions";

export const postArticleToFirebase = payload => {
    const postsCollection = collection(db, 'posts');

    if( payload.image === '' && payload.video === '' ) {
        const postPost = async () => {
            try {
                await addDoc( postsCollection, {
                    user: {
                        id: payload.user.uid,
                        email: payload.user.email,
                        name: payload.user.displayName,
                        userImage: payload.user.photoURL
                    },
                    video: '',
                    sharedImg: '',
                    comments: 0,
                    date: payload.date,
                    time: payload.time,
                    timestamp: payload.timestamp,
                    description: payload.description,
                    reactions: payload.reactions
                })
            }
            catch( error ) {
                console.log("Error creating new post!", error.message);
            }
        };
        postPost();
    }

    if(  payload.image !== ''  ) {
        const storageRef = ref( storage, `images/${ payload.image.name }`);

        // Uploading Process...
        const upload = uploadBytesResumable( storageRef,  payload.image);
        upload.on('state_changed',
        snapshot => {
            const progress = (
                ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
            );

            console.log( `Progress: ${progress}%` );

            if( snapshot.state === 'RUNNING' ) {
                console.log( `Running progress: ${progress}%` );
            }
        },
        error => {
            console.log( error.code );
        },
        async () => { //posting on Firebase Firestore...
            const downloadURL = await getDownloadURL( storageRef );

            try {
                await addDoc( postsCollection, {
                    user: {
                        id: payload.user.uid,
                        email: payload.user.email,
                        name: payload.user.displayName,
                        userImage: payload.user.photoURL
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    timestamp: payload.timestamp,
                    date: payload.date,
                    time: payload.time,
                    description: payload.description,
                    reactions: payload.reactions
                })
            }
            catch( error ) {
                console.log("Error creating new post!", error.message);
            }
        });
    }

    else if( payload.video !== '' ) {
        const postPostWithVideo = async () => {
            try {
                await addDoc( postsCollection, {
                    user: {
                        id: payload.user.uid,
                        email: payload.user.email,
                        name: payload.user.displayName,
                        userImage: payload.user.photoURL
                    },
                    video: payload.video,
                    sharedImg: '',
                    date: payload.date,
                    time: payload.time,
                    timestamp: payload.timestamp,
                    comments: 0,
                    description: payload.description,
                    reactions: payload.reactions
                })
            }
            catch( error ) {
                console.log("Error creating new post with Video!", error.message);
            }
        };
        postPostWithVideo();
    }
}

// Thunk Async Function: we're trying to fetch data asynchronously
// and update the Redux State. Hence, we use the "Redux thunk"
// shape, which returns an async function with dispatch as argument
export const getPostsFromFirebaseAsync = user => {

    return async dispatch => {

        dispatch( fetchPostsStart() );

        const postsQuery = query( collection( db, 'posts' ),
            where("user.id", "==", user.uid),
            orderBy("timestamp", "desc"),
            limit(5));

        const postsQuerySnapshot = await getDocs(postsQuery);

        const posts = convertCollectionSnapshotToArray( postsQuerySnapshot );

        try {
            dispatch( fetchPostsSuccess( posts ) );
        }
        catch (error) {
            dispatch( fetchPostsFailure( error.message ) );
        }
    }

}
