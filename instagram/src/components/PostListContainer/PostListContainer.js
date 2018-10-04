import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js'
import './PostListContainer.css'

const PostListContainer = () => {

    return (
        //receives postData from App as Array
        //for each post in postData array send to PostContainer
        // <PostContainer />
        <div className="list-container">
            <h3>PostListContainer</h3>
            <PostContainer />
        </div>
    )
}

export default PostListContainer;