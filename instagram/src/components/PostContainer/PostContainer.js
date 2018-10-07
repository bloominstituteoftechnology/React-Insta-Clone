import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import LikesSection from './LikesSection';
import PropTypes from 'prop-types';

const PostContainer = props =>  <div className="post-container">
                                    <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
                                    <PostImage image={props.post.imageUrl} />
                                    <LikesSection likes ={props.post.likes} name={props.post.username} incrementHandler={props.incrementHandler} />
                                    <CommentSection comments={props.post.comments} date={props.post.timestamp}/>    
                                </div>

PostContainer.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostContainer;