import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {


    return (
     <div key={props.post.username + props.post.thumbnailUrl + props.post.imageUrl + props.post.likes + props.post.timestamp}>
        <div className="postContainer">
            <div className="postHeader">
                <span className="username">{props.post.username}</span>
                <img className="thumbnail" src={props.post.thumbnailUrl}/>
            </div>
            <img className="imagePost" src={props.post.imageUrl}/>
            <CommentSection comments={props.post.comments}/>
            <span className="time">{props.post.timestamp}</span>
        </div>
     </div>
    )
}

export default PostContainer;