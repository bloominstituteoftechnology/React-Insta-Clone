import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import moment from 'moment'

const PostContainer = props => {
    return (
        <div className="post">
            <PostHeader user={props.user} thumbnail={props.thumbnail} />
            <img className="post-img" src={props.img} alt="" />
            <div className="stats">
                <div className="icons">
                    <i class="far fa-heart fa-2x" /> &emsp; <i class="far fa-comment fa-2x" />
                </div>
                <p className="likes" onClick={props.handleLike}>{props.likes} likes</p>
            </div>
            <CommentSection
                comments={props.comments} 
                time={moment(props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()} />
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