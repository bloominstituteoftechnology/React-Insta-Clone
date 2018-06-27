import React from 'react';
import CommentsContainer from '../CommentSection/CommentsContainer';
import PostHeader from './PostHeader';
import './Posts.css';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
                <img
                    className="post-image"
                    src={props.post.imageUrl}
                    alt="post thumbnail"
                />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>

    );
};

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
};

export default Post;

