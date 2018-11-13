import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div className="comment-section-container">
            <div className="post-interact-icons">
            </div>
            <div className="post-likes">
                {/* Works */}
                <p>{props.post.likes}</p>
            </div>
            <div className="post-comments">
                {props.post.comments.map( () => {
                    console.log('Hello')
                }
                )}
                {console.log(props.post.comments[0])}
                
            </div>
        </div>
    )
};

export default CommentSection;