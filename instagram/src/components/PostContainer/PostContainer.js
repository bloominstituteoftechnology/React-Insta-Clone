import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map ((item, index) => <Post post={item} key={index} />)}
        </div>
    );
}


export default PostContainer;