import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import CommentInput from '../CommentSection/CommentInput';
import LikesSection from '../CommentSection/LikesSection';

const PostsWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const PostBorder = styled.div`
    border: 1px solid #d3d3d3;
    margin: 50px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImage = styled.img`
    width: 100%;
`;

const Post = props => {
    return ( 
        <PostBorder>
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            
            <PostsWrapper>
                <PostImage
                src={props.post.imageUrl} alt="post" 
                /> 
            </PostsWrapper>

            <LikesSection likes={props.post.likes} />
            
            <CommentSection comments={props.post.comments} />

            <CommentInput />

        </PostBorder>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageURL: PropTypes.string,
    })
};

export default Post;