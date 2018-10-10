import React from 'react';
import './PostContainer.css';
import Post from './Post.js';

const PostContainer = props => {
    return (
        <div>
            {props.data.map((item, index) => {
                return (
                  <Post post={item} key={item.timestamp}/>
                );
            })}
        </div>
    );
}

export default PostContainer;