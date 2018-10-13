import React from 'react';
import './CommentSection.css'

const Comment = (props) =>{
    return <p value={props.value} className="comment-text"><strong>{props.comUserName}</strong> {props.comText}</p>

};

export default Comment;