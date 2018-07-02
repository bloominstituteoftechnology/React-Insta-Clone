import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt="thumbnail"></img>
                {props.post.username}
            </div>
            
            <img className="post-image" src={props.post.imageUrl} alt={props.post.username}></img>
            <CommentSection comments={props.post.comments} likes={props.post.likes} />
        </div>
    )
}



export default PostContainer; 