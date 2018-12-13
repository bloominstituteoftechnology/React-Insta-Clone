import React from 'react';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    console.log(props)
    return (
        <div className="post-container">
            <div className="user-info">
                <img src={props.post.thumbnailUrl} alt="user thumbnail"/>
                <p className="username">{props.post.username }</p>
            </div>

            <div className="image-container">
                <img src={props.post.imageUrl} alt=""/>
            </div>

            <CommentSection comments={props.post.comments} />
        </div>
    );
}
 
export default PostContainer;