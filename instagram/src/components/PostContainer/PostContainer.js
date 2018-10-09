import React from 'react';
import PostHeader from './PostHeader';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return (
        <div className="postContainer">
            <PostHeader post={props.post}/>
            <CommentSection post={props.post} index={props.index}/>
        </div>
    );
}

export default PostContainer;