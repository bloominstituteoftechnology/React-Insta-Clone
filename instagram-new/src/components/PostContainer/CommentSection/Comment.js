import React from 'react';
import './Comment.css' 

const CommentDisplay = props => { 
    return (
        <div className = 'comments-all'>
            {props.comments.map(comments => {
                return (
                    
                    <div className ='comments-content'>
                        <h5>{comments.username}</h5>
                        <p>{comments.text}</p>
                    </div>
                    
                
                );
            })}
            <p className = 'time'>2 HOURS AGO</p>
        </div>
    );
}

export default CommentDisplay;