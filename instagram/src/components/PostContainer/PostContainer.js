import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <div>
            <h2>{props.thisPost.username} <img src={props.thisPost.thumbnailUrl}></img></h2>
            <img src={props.thisPost.imageUrl} />
            <p>{props.thisPost.timestamp}</p>
            <p>{props.thisPost.likes} likes</p>
            <CommentSection thisPost={props.thisPost} />
        </div>
    );
}

PostContainer.propTypes = {
    thisPost: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes:  PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default PostContainer;