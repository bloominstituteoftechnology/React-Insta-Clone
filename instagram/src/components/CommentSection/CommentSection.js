import React from 'react';
// import Proptypes from 'prop-types';


const CommentSection = props => {
    return(
        <div className='comment-container'>
            <i class='far fa-heart'></i>
            <i class='far fa-comment'></i>
            <h2 className= 'likes'>{props.content.likes}</h2>
            {props.content.comments.map(comments => 
                <div className='comment-combo'>
                    <h3 className='commenter'>{comments.username}</h3>
                    <p className ='comment-text'>{comments.text}</p>
                </div>)}
                <p className='timestamp'>{props.content.timestamp}</p>
        </div>
    );
}

export default CommentSection;