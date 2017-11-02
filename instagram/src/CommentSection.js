import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="CommentSection" >
            {props.postData.map((postData) =>{
                return(
                    <div className="Comment" key={postData.id}>
                    <p>{postData.comments.username}</p>
                    </div>
                );
            })}
            </div>
    );
}

export default CommentSection;