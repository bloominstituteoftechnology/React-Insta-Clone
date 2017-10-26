import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return ( 
        <div> 
        {props.postData.map((post) => {
            return (
                <div key={post.id}>
                <p> {post.comments} </p>
                </div>
            )
        })}
    
        </div>
    )
    }
    export default CommentSection;