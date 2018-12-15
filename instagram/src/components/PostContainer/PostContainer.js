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
            <CommentSection comments={props.post.comments} likes={props.post.likes} />
        </div>
    );
};

PostContainer.propTypes = {
    post: PropTypes.object.isRequired
};


export default PostContainer;