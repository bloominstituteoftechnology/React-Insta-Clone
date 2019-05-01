import React from 'react';
import heart from '../../heart.svg';
import comment from '../../comment.svg';

const Post = props => {
    return (
        <div className="post">
            <div className="user-banner">
                <img className="user-img" src={props.data.thumbnailUrl} alt="user-img"/>
                <h3>{props.data.username}</h3>
            </div>
            <img className="user-post" src={props.data.imageUrl} alt="user-post"/>
            <div className="comment-logos">
                <img className="comment-logo" src={heart} alt="heart" />
                <img className="comment-logo" src={comment} alt="comment" />
                <p className="likes">{props.data.likes} Likes</p>
            </div>
        </div>
    );
}

export default Post;