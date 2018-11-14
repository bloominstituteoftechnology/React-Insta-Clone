import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            {props.post.map(item => <Post key={Math.random()} post={item} />)}
        </div>
    );
};



export default PostContainer;