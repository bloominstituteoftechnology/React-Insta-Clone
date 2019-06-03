import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div className="post__container">
            <div className="user__deets">
                <img className="profile__pix" src={props.post.thumbnailUrl} alt="user-profile" />
                <p>{props.post.username}</p>
            </div>
            <div className="user__post">
                <img className="post__image" src={props.post.imageUrl} alt="user-post"/>
            </div>
        </div>
    )
}

export default PostContainer;