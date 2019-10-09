import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostContainer/PostHeader';
import PostImage from '../PostContainer/PostImage';

const PostContainerDiv = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
`;

const PostContainer = props => {
    return (
        <PostContainerDiv>
                <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
                <PostImage image={props.post.imageUrl} />
                <CommentSection likes={props.post.likes} comments={props.post.comments} timestamp={props.post.timestamp} />
        </PostContainerDiv>
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