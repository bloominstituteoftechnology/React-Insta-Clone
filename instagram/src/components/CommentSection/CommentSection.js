import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';




const CommentSection = props => {

    return(
        <div className='comment-section'>
            {props.comments.map((comment, index) => (
                <Comment
                comment ={comment}
                key={index}
                />
           ))}
           <input placeholder='Add a comment...'/>
            
        </div>
    );
}

export default CommentSection;