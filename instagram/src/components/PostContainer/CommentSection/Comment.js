import React from 'react';
import './Comment.css' 

const Comment= props => { 
    return (
        <div>
            {props.comments.map(comments => {
                return (
                    
                    <div className ='comments-content'>
                        <h5>{comments.username}</h5>
                        <p>{comments.text}</p>
                    </div>
                    
                
                );
            })}
            <p className = 'time'>2 HOURS AGO</p>
            <input className = 'comment-input' type='text' placeholder ='Add a comment...'></input>
        </div>
    );
}

export default Comment;