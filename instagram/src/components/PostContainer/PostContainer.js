import React from 'react';
import PostHeader from './PostHeader';
import './PostContainer.css';
import CommentContainer from '../CommentSection/CommentContainer.js';

const PostContainer = props => {
    return (
        <div className="postContainer">
            <PostHeader item={props.item}/>
            <CommentContainer item={props.item}/>
        </div>
    );
}

export default PostContainer;