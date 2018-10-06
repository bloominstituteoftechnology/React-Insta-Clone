import React from 'react';
import './CommentSection.css'

const Comment = (props) =>{
    return <p className="comment-text"><strong>{props.comUserName}</strong> {props.comText}</p>

};

export default Comment;