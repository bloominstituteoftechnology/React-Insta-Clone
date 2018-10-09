import React from 'react';
import PostHeader from './PostHeader';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return (
        <div className="postContainer">
            <PostHeader item={props.item}/>
            <CommentSection newComment={props.newComment} item={props.item} index={props.index}/>
        </div>
    );
}

export default PostContainer;