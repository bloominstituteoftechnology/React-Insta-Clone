import React from 'react';
import Comment from './Comment.js';
import '../ig.css';

const CommentSection = props => {
    return (
        <div className="commentSection">
            {/* breakdown array of comments and pass each item in to <Comment/> */}
            {props.comments.map(comm => <Comment comments={comm}/>)}
        </div>
    )
}

export default CommentSection;