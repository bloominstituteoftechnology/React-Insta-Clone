import React from 'react';
import './commentsection.css';

const CommentSection = props => {
    return (
        <div className = 'comment-container'>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <h2 className= 'likes'>{props.content.likes} likes</h2> 
            {props.content.comments.map((comments, i) => 
                <div key= {i} className= 'comment-combo'>
                    <h3 className= 'commenter'>{comments.username}</h3>
                    <p className= 'comment-text'>{comments.text}</p>
                </div>)} 
            <p className= 'timestamp'>{props.content.timestamp}</p>   
            <input className='add-comment' placeholder='Add a comment...'></input>              
        </div>
    );
}



export default CommentSection;