const INITIAL_STATE = {
    posts: null,
    loading: false,
    errorMessage: null
}

const postsReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'FETCH_POSTS_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default postsReducer;



