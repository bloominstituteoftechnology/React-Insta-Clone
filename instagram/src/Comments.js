import React from 'react';
import './Comments.css';
const CommentsComponent = (props) => {
    return (<div>{props.comments.map((comment, i) => {
        return <p className="comments" key={i}>
            <span className="comment-username">{comment.username}
            </span> {comment.text}</p>;
    } )}</div>)
};

export default CommentsComponent;