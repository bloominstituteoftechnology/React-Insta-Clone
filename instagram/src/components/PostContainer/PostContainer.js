import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PropTypes from 'prop-types';
import styled from '../../../node_modules/styled-components';

const Container = styled.div`
    border: 1px solid lightgray;
    margin: 60px auto;
    padding-bottom: 0;
    width: 70%
`

const PostContainer = props =>  <Container>
                                    <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
                                    <PostImage image={props.post.imageUrl} />                                    
                                    <CommentSection comments={props.post.comments} date={props.post.timestamp} likes={props.post.likes} />    
                                </Container>

PostContainer.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostContainer;