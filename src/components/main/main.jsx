import user_svg from '../../assets/user.svg';
import photo_icon from '../../assets/photo.svg';
import video_icon from '../../assets/video-icon.svg';
import event_icon from '../../assets/event-icon.svg';
import article_icon from '../../assets/article-icon.svg';
import Modal from "../UI/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import { getPostsFromFirebaseAsync, postArticleToFirebase } from "../../redux/posts/posts.utilis";
import LoadingSpinner from "../UI/loading-spinner/loading-spinner";
import { Article, ShareBox, SharedActor, Description, SharedImg, SocialCounts, SocialActions, ModalContent, PostButton } from './main.style';
import { serverTimestamp } from 'firebase/firestore';


const Main = () => {

    const user = useSelector( state => state.user.user );
    const posts = useSelector( state => state.posts );
    const dispatch = useDispatch();
    const [ newPostIsPublished, setPostIsPublished ] = useState(0);
    const [ textareaContent, setTextareaContent ] = useState('');
    const [ showModal, setShowModal ] = useState(false);
    const [ uploadImage, setUploadImage ] = useState('');
    const [ videoLink, setVideoLink ] = useState('');
    const [ imageOrVideoArea, setImageOrVideoArea ] = useState('');

    useEffect(() => {
        dispatch( getPostsFromFirebaseAsync( user ) );
    }, [ newPostIsPublished ]);

    const handleModalClick = e => {
        e.preventDefault();

        switch ( showModal ) {
            case false:
                setShowModal(true);
                break;

            case true:
                setShowModal(false);
                break;

            default:
                break;
        }
    }

    const handleTextareaChange = e => {
        setTextareaContent( e.target.value );
    }

    const handleImageUpload = e => {
        const image = e.target.files[0];

        if( image === '' || image === undefined ) {
            alert(`not an image, the file is a ${ typeof image }`);
            return;
        }

        setUploadImage(image);
    }

    const handleVideoLink = e => {
        setVideoLink(e.target.value);
    }

    const switchImageVideoLoaded = type => {
        setUploadImage('');
        setVideoLink('');
        setImageOrVideoArea( type );
    }

    const postArticle = e => {
        e.preventDefault();

        if(e.target !== e.currentTarget) {
            return;
        }

        const dateObj = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = dateObj.toLocaleDateString( 'en-EN', options );
        const time = dateObj.toLocaleTimeString();
        const reactions = Math.floor(Math.random() * 100);

        const payload = {
            image: uploadImage,
            video: videoLink,
            user: user,
            reactions: reactions,
            description: textareaContent,
            date: date,
            time: time,
            timestamp: serverTimestamp()
        };

        postArticleToFirebase( payload );

        resetModal(e);

        setPostIsPublished(state => !state);
    }

    const resetModal = e => {
        setTextareaContent( '' );
        setUploadImage( '' );
        setVideoLink( '' );
        setImageOrVideoArea( '' );
        handleModalClick(e);
    }

    return (
        <>
            <ShareBox
                flexDirection='column'>
                <div>
                    { user && user.photoURL
                        ? <img src={ user.photoURL } alt="" />
                        : <img src={ user_svg } alt="" />
                    }
                    <button onClick={ resetModal } disabled={ posts.loading ? true : false } >Start a post</button>
                </div>

                <div>
                    <button>
                            <img src={ photo_icon } alt="" />
                            <span>Photo</span>
                    </button>

                        <button>
                            <img src={ video_icon } alt="" />
                            <span>Video</span>
                        </button>

                        <button>
                            <img src={ event_icon } alt="" />
                            <span>Event</span>
                        </button>

                        <button>
                            <img src={ article_icon } alt="" />
                            <span>Article</span>
                        </button>
                </div>
            </ShareBox>

            { posts.loading
                ? <LoadingSpinner />
                : posts.posts && posts.posts.length > 0
                    ? ( <div className="posts-container">
                            <div className="articles">
                                { posts.posts && posts.posts.map( (post, i) => {
                                    return <Article key={ i }>
                                        <SharedActor>
                                            <a>
                                                <img src={ post.user.userImage } alt="User"/>
                                                <div>
                                                    <span>{ post.user.name }</span>
                                                    <span>{ post.user.email }</span>
                                                    <span>{ `${ post.date } at ${ post.time }` }</span>
                                                </div>
                                            </a>
                                            <button className="circle-options">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </button>
                                        </SharedActor>

                                        <Description>
                                            { post.description }
                                        </Description>
                                        <SharedImg>
                                            <a>
                                                {
                                                    post.sharedImg === '' && post.video
                                                        ? <ReactPlayer width={'100%'} url={ post.video } />
                                                        : ( post.sharedImg ? <img src={ post.sharedImg } alt="Shared Post" /> : null )
                                                }
                                            </a>
                                        </SharedImg>

                                        <SocialCounts>
                                            <li>
                                                <button>
                                                    <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                                                    <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                                                    <span>{ post.reactions }</span>
                                                </button>
                                            </li>
                                            <li><a>{ post.comments } comments</a></li>
                                        </SocialCounts>

                                        <SocialActions>
                                            <button>
                                                <img src="" alt="" />
                                                <span>Like</span>
                                            </button>
                                            <button>
                                                <img src="" alt="" />
                                                <span>Comment</span>
                                            </button>
                                            <button>
                                                <img src="" alt="" />
                                                <span>Share</span>
                                            </button>
                                            <button>
                                                <img src="" alt="" />
                                                <span>Send</span>
                                            </button>
                                        </SocialActions>
                                    </Article>
                                } ) }
                            </div>
                        </div> )
                    : <p style={{marginTop: '25px'}}>You haven't shared any posts yet</p>
            }


            { showModal
                ? ( <Modal onClose={ handleModalClick }>
                        <ModalContent>
                            <h2>Create a post</h2>
                            <div className="user-info">
                                <img src={ user && user.photoURL && user.photoURL !== '' ? user.photoURL :  user_svg } alt="" />
                                <span>{ user && user.displayName && user.displayName !== '' ? user.displayName : 'Your name' }</span>
                            </div>

                            <div className="editor">
                                <textarea
                                    name="post-editor"
                                    id="post-editor"
                                    cols="30"
                                    rows="10"
                                    placeholder="What do you want to talk about?"
                                    value={ textareaContent }
                                    autoFocus={ true }
                                    onChange={ handleTextareaChange } />

                                <div className="upload">
                                    { imageOrVideoArea && imageOrVideoArea === 'image'
                                        ? (
                                            <div className="image">
                                                <input
                                                    type="file"
                                                    name="image"
                                                    id="image"
                                                    accept="image/gif, image/jpeg, image/png"
                                                    style={ { display: 'none' } }
                                                    onChange={ handleImageUpload } />
                                                <p>
                                                    <label htmlFor="image">Select an image to share &#x2192;</label>
                                                </p>
                                                { uploadImage && <img src={ URL.createObjectURL( uploadImage ) } alt="Uploaded File" /> }
                                            </div>
                                        )

                                        : (
                                            <div className="video">
                                                <input
                                                    type="text"
                                                    placeholder="Please input a video link"
                                                    value={ videoLink }
                                                    onChange={ handleVideoLink } />
                                                { videoLink && <ReactPlayer
                                                                    width={'100%'}
                                                                url={ videoLink } /> }
                                            </div>
                                        )

                                    }
                                </div>
                            </div>

                            <div className="share-content">
                                <div className="share-buttons">
                                    <button
                                        onClick={ () => switchImageVideoLoaded( 'image' ) }>
                                        <img src="" alt="" />
                                        Image
                                    </button>
                                    <button
                                        onClick={ () => switchImageVideoLoaded( 'video' ) }>
                                        <img src="" alt="" />
                                        Video
                                    </button>
                                </div>

                                <PostButton disabled={ !textareaContent } onClick={ e => postArticle(e) }>
                                        Post
                                </PostButton>
                            </div>
                        </ModalContent>
                    </Modal> )

                : null
            }

        </>
    )
}

export default Main;