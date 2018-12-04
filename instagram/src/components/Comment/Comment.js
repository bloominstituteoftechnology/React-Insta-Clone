import React from 'react';
import './Comment.css';

const Comment = props => <p className="comment-instance"><span>{props.name}</span> {props.text}</p>

export default Comment;