import React from 'react';
import './PostContainer.css';
// import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map (item => <Post post={item} />)}
        </div>
    );
}



export default PostContainer;