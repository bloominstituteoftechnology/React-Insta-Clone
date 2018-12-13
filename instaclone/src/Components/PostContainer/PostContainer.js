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
                <img src={props.post.imageUrl} alt=""/>
            </div>
            <div className="icon-container"></div>
            <p className="likes">Likes {props.post.likes}</p>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}
 
export default PostContainer;