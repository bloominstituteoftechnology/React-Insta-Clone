import React from 'react';
import './PostContainer.css';
import Post from './Post'


const PostContainer = props => {
    return (
        <div>
            <Post posts={props.posts} />
        </div>
    );
}

export default PostContainer;