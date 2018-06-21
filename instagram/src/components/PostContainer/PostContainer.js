import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentsContainer from '../CommentSection/CommentsContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostWrapper = styled.div`
max-width: 600px;

margin: 0 auto 24px;
font-size: 1.4rem;

-webkit-box-shadow: 7px 10px 31px 3px rgba(0, 0, 0, 0.4);
box-shadow: 7px 10px 31px 3px rgba(0, 0, 0, 0.4);
`;


const PostContainer = (props) => {
    return (
        <PostWrapper>
            <PostHeader
                thumbnailUrl={props.dataItem.thumbnailUrl}
                username={props.dataItem.username} />
            <PostContent
                imageUrl={props.dataItem.imageUrl}
                likes={props.dataItem.likes}
                addLikeHandler={props.addLikeHandler}
                index={props.index}
            />

            <CommentsContainer comments={props.dataItem.comments}
                changeCommentHandler={props.changeCommentHandler}
                addCommentHandler={props.addCommentHandler}
                index={props.index} />
        </PostWrapper>
    );
}

PostContainer.propTypes = {
    dataItem: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
    }),
    index: PropTypes.number.isRequired
};
export default PostContainer;