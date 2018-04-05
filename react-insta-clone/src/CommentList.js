import React from 'react';
import './CommentList.css';

export const CommentList = props => {
    return <div className="Comments">{props.comments.map((aComment, index) => (
        <div key={index} className="Comment">
            <span className="Comment__Username">{aComment.username}</span>
            <span className="Comment__Text">{aComment.text}</span>
        </div>
    ))}</div>;
};