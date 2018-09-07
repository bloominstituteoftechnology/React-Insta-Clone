import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import PostAvatar from './PostAvatar';
import PostImg from './PostImg';
import styled from 'styled-components';

const PostContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`;

function Post(props) {
    return(
        <PostContainer>
            <PostAvatar
                posterName = {props.post.username}
                posterAvatar = {props.post.thumbnailUrl}
            />

            <PostImg
                postImg = {props.post.imageUrl}
            />

            <CommentContainer 
                comments = {props.post.comments}
                timestamp = {props.post.timestamp}
            />
        </PostContainer>
    )
}

export default Post;