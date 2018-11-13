import React, { Component } from 'react';
// import dummyData from './src/dummy-data';

const Comment = props => {
    return (
        <div className="comment">
            <p>
                <span className="comment-username">
                {props.comment.username}</span>
                {props.comment.text}
            </p>
        </div>
    )
}


export default Comment;