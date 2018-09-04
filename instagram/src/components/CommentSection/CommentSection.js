import React, { Component } from 'react';

function CommentSection(props) {
    return (
        <div className="comment">
            <div className="bold">
                {props.dummyData.username}
            </div>
            <div className="text-content">
                {props.dummyData.text}
            </div>
        </div>
    )
}


export default CommentSection;