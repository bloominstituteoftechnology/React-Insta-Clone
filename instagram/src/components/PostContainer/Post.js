import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';

import { CardImg } from 'reactstrap';
import { PostContainer, PostTopContent, PostBottomContent, ThumbnailImg, PostUsername, PostCommentSection, StyledRow } from '../ReusableComponents/PostContainer';

const Post = props => {


    return (
        <PostContainer>

            <PostTopContent>

                <StyledRow>
                    <ThumbnailImg src={props.data.thumbnailUrl} alt='' />
                    <PostUsername><strong>{props.data.username}</strong></PostUsername>
                </StyledRow>

            </PostTopContent>

            <CardImg width="100%" src={props.data.imageUrl} alt='' />

            <PostBottomContent>

                <StyledRow>
                    <LikeSection id={props.id} likes={props.data.likes} />
                </StyledRow>

                <PostCommentSection>
                    <CommentSection timestamp={props.data.timestamp} id={props.id} name={props.data.username} comments={props.data.comments} />
                </PostCommentSection>

            </PostBottomContent>

        </PostContainer>
    );
}

Post.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        liked: PropTypes.boolean,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
};

export default Post;