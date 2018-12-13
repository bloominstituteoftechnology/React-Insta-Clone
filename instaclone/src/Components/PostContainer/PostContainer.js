import React from 'react';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';
import UserInfo from '../UserInfo/UserInfo';

const PostContainer = props => {
    console.log(props)
    return (
        <div className="post-container">
            <UserInfo thumbnailUrl={props.post.thumbnailUrl} username={props.post.username} />

            <div className="image-container">
                <img src={props.post.imageUrl} alt="" className="post-image"/>
            </div>

            <div className="bottom-container">
                <div className="icon-container"></div>
                <p className="likes">{props.post.likes} likes</p>
                <CommentSection comments={props.post.comments} />
            </div>
            
        </div>
    );
}
 
export default PostContainer;