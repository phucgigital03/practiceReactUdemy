

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './store/actions/postAction';

function PostList() {
    const dispatch = useDispatch();
    const {posts, loading, error} = useSelector(state => state.posts)

    console.log(posts)

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])

    if(loading){
        return <p>Loading....</p>
    }
    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
        PostList
        <ul>
            {
                posts.map((post)=>{
                    return <li key={post.id}>
                        <p>{post.title}</p>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default PostList

