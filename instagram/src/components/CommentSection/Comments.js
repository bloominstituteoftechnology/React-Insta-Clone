import React from 'react';
import './commentSection.css';

const Comments = (props) => {
    return (<div>
                <div className="commentUsername">{props.comments.username}</div>
                <div className="commentText">{props.comments.text}</div>
            </div>)
}
export default Comments;