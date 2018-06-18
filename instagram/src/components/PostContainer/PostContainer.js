import React from 'react'
import './PostContainer.css';
import CommentSection from './CommentSection/CommentSection'
import PropTypes from 'prop-types';

function PostContainer (props) {
    return (
        <div className="post-container">
            <h1>Post-container</h1>
            <CommentSection comments={props.post.comments} />
            <input type="text" className="new-comment"/>
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
    })
};

export default PostContainer;