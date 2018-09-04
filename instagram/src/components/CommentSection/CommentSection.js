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
            <form onSubmit={

                props.handleInputComment
                props.addNewComment}>
                <input value="Add a comment"></input>
            </form>
        </div>
    );
}

export default CommentSection;