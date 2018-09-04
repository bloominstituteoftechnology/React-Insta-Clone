import React from 'react';
import Comment from './Comment.js';
// import PostContainer from '../PostContainer/PostContainer.js';

const CommentSection = props => {
    return (
        <div>
            <Comment
            username={props.comment.username}
            text={props.comment.text}
            />
           
        </div>
       
    );
}

export default CommentSection;