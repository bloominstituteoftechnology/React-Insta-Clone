import React from 'react';
import './post.css';
import CommentSection from "../CommentSection/CommentSection";


const PostContainer = props => {
    return (
        <div>
            <div className = "post-header">
                <img className="post-icon" alt="round" src={props.data.thumbnailUrl} /> 
                <div className="user">{props.data.username}</div>
            </div>
            <div>
                <img className="post-img" alt="mainimage" src={props.data.imageUrl} />
            </div>
            <div className="icons">
            </div>
            <div>
                {props.data.likes}
            </div>
            <CommentSection comments={props.data.comments} />
        </div>
        
        
    );

};

export default PostContainer;