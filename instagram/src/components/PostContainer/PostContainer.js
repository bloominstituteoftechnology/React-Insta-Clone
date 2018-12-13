import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="postContainer">
            <div className="OpContainer">
                <img className="postOpAvatar" src="https://static01.nyt.com/images/2018/06/26/business/25ugileistdog-sub/merlin_140144286_193276f3-89e9-44a8-a828-51ec9ff5bc8e-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="Avatar" />
                <h2 className="postOp">{props.post.username}</h2>
            </div>
            <img className="postPicture" src="https://bakingmischief.com/wp-content/uploads/2017/04/chocolate-milk-for-one-photo.jpg" alt="" />
            <CommentSection comments={props.post.comments} />
            <input type="text" placeholder="Add a comment..." />
        </div>
    );
};

PostContainer.propTypes = {
    post: PropTypes.object
};


export default PostContainer;