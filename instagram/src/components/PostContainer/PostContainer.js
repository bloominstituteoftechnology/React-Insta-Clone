import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="postContainer">
            <div className="OpContainer">
                <img className="postOpAvatar" src={props.post.thumbnailUrl} alt="Avatar" />
                <h2 className="postOp">{props.post.username}</h2>
            </div>
            <img className="postPicture" src={props.post.imageUrl} alt="Post picture" />
            <div className="buttonsContainer">
                <img className="likeButton" src="" alt="Like Button" />
                <img className="commentButton" src="" alt="Comment Button" />
            </div>
            <div className="likesContainer"><p>{props.post.likes}</p></div>
            <CommentSection comments={props.post.comments} />
            <div className="inputComment">
            <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    );
};

PostContainer.propTypes = {
    post: PropTypes.object
};


export default PostContainer;