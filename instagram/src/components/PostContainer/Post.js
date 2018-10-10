import React from 'react';
import PostHeader from './PostHeader';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection.js';

const Post = props => {
    return (
        <div className="postContainer">
            <PostHeader post={props.post}/>
            <CommentSection post={props.post} index={props.index}/>
        </div>
    );
}

export default Post;