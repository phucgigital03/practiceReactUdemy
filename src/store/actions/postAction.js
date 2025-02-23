

export const fetchPostRequest = ()=>{
    return {
        type: 'FETCH_POSTS_REQUEST'
    }
}
export const fetchPostSuccess = (posts)=>{
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: posts
    }
}
export const fetchPostFailure = (error)=>{
    return {
        type: 'FETCH_POSTS_FAILURE',
        payload: error
    }
}

export const fetchPost = ()=>{
    return async (dispatch)=>{

        dispatch(fetchPostRequest())
        dispatch(fetchPostRequest())
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json()
            console.log(result)
            dispatch(fetchPostSuccess(result))
        }catch(error){
            dispatch(fetchPostFailure(error.message))
        }

    }
}

