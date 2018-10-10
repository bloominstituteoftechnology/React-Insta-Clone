import React from 'react';
import PropTypes from 'prop-types';

import '../PostContainer/PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostContainer/PostHeader';
import PostImage from '../PostContainer/PostImage';

const PostContainer = props => {
    return (
        <div className="post-container">
                <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
                <PostImage image={props.post.imageUrl} />
                <CommentSection likes={props.post.likes} comments={props.post.comments} timestamp={props.post.timestamp} />
        </div>
    );
}

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })),
    imageUrl: PropTypes.string,
    id: PropTypes.number,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}

export default PostContainer;