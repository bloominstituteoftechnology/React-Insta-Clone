import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PropTypes from 'prop-types';

const PostContainer = props =>  <div className="post-container">
                                    <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
                                    <PostImage image={props.post.imageUrl} />                                    
                                    <CommentSection comments={props.post.comments} date={props.post.timestamp} likes={props.post.likes} />    
                                </div>

PostContainer.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostContainer;