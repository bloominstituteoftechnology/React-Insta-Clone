import React from 'react';
import './CommentSection.css';

const CommentSection = props =>{
    
    return (
        <div className="commentSection">{
            props.commentArray.map( (commentObject, index) =>{
                // console.log(commentObject.username);
                return (
                    <div key={index} className="commentObject">
                        <div className="username">{commentObject.username}</div>
                        <div className="comment">{'  '+commentObject.text}</div>
                    </div>
                );
            })}
           
        </div>
    );
}

export default CommentSection;