import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="post">
            <PostHeader user={props.user} thumbnail={props.thumbnail} />
            <img src={props.img} alt="" />
            <CommentSection comments={props.comments} time={props.time} />
        </div>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string,
    })),
};

export default PostContainer;