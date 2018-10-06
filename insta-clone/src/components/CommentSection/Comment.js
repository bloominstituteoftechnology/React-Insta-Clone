import React from 'react';
import './CommentSection.css'

const Comment = (props) =>{
    return <p><strong>{props.comUserName}</strong> {props.comText}</p>

};

export default Comment;