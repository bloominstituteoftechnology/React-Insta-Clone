import React from 'react';
import PostContainer from '../PostContainer/PostContainer';

import './PostList.css';


const PostList = function (props) {
    return (
        <div className='post-container'>
            Post List!!
            <PostContainer />
            <PostContainer />
            <PostContainer />

    </div>
    )
};



export default PostList;