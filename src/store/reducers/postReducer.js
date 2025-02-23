
const initialState = {
    posts: {
        posts: [],
        loading: false,
        error: null
    }
}

export const postReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            console.log(state)
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
                error: action.payload
            }
        default:
            return state;
    }
}


