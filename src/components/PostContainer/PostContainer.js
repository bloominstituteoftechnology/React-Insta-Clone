import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            <div className = "postcontainer">
            {props.posts.map (post =>
             < Post key = {post.timestamp} post = {post} />
            )}
            </div>
        </div>
    )
}
 
export default PostContainer;