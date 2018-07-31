import React from 'react';
import './post.css';
import CommentSection from "../CommentSection/CommentSection";


const PostContainer = props => {
    return (
        <div>
            <div className = "post-header">
                <img src={props.data.thumbnailUrl} /> {props.data.username}
            </div>
            <div>
                <img className="post-img" src={props.data.imageUrl} />
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