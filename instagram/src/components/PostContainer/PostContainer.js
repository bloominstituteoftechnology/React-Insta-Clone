import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            {props.post.map(item => <Post key={Math.random()} post={item} user = {props.user}/>)}
        </div>
    );
};



export default PostContainer;