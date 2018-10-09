import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../PostContainer/PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostContainer/PostHeader';
import PostImage from '../PostContainer/PostImage';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.post.comments,
            image: props.post.imageUrl,
            likes: props.post.likes,
            thumbnail: props.post.thumbnailUrl,
            username: props.post.username
        }
    }

    render() {
        return (
            <div className="post-container">
                <PostHeader username={this.state.username} thumbnail={this.state.thumbnail} />
                <PostImage image={this.state.image} />
                <CommentSection likes={this.state.likes} comments={this.state.comments} />
            </div>
        );
    }
}

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}

export default PostContainer;