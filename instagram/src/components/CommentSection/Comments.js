import React from 'react';
import './Comments.css';

const Comments = props => {
    return (
        <div className="likes">{props.likes} likes</div>
    );
};

export default Comments;