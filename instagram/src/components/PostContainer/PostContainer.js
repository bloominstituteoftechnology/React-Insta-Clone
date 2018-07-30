import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="post">
            <PostHeader user={props.user} thumbnail={props.thumbnail} />
            <img src={props.img} alt="" />
            <div>
                <i class="far fa-heart fa-2x" /> &emsp; <i class="far fa-comment fa-2x" />
            </div>
            <p className="likes">{props.likes}</p>
            <CommentSection comments={props.comments} time={props.time} />
        </div>
    );
};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string,
};

export default PostContainer;