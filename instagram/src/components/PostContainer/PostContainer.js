import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    return (
        <div className="post-container">
        <div>{props.post.username}</div>
        <img className="post-image" src={props.post.imageUrl} alt={props.post.username}></img>
        <CommentSection />
        </div>
    )
}


export default PostContainer; 