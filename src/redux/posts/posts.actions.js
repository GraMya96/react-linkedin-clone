export const fetchPostsStart = () => {
    return {
        type: 'FETCH_POSTS_START'
    }
}
export const fetchPostsSuccess = posts => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: posts
    }
}
export const fetchPostsFailure = errorMessage => {
    return {
        type: 'FETCH_POSTS_FAILURE',
        payload: errorMessage
    }
}



