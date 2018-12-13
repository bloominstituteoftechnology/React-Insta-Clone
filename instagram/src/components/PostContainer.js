import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentSection from './CommentSection';
import { Username } from '../assets/styles/reusable-components';

const Post = styled.section`
    width: 50%;
    margin: 0 auto;
    border: 1px solid rgba(128, 128, 128, 0.3);
    margin-bottom: 50px;
    overflow: hidden;
    font-size: 1.6rem;
`;

const Header = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 3%;
    height: 50px;
`;

const Thumbnail = styled.img`
    border-radius: 100%;
    height: 50%;
    margin-right: 2%;
    cursor: pointer;
`;

const PostImage = styled.img`
    width: 100%;
`;


///////////////////////////////////////////////////////////////////////////////////


const PostContainer = props => (
    <Post>
        <Header>
            <Thumbnail src={props.data.thumbnailUrl} alt="user thumbnail" draggable="false" />
            <Username>{props.data.username}</Username>
        </Header>
        <PostImage src={props.data.imageUrl} alt="User post" draggable="false" />
        <CommentSection 
            comments={props.data.comments}
            likes={props.data.likes}
            time={props.data.timestamp}
            index={props.index}
            onNewComment={props.onNewComment}
            onDeleteComment={props.onDeleteComment}
        />
    </Post>
);

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })),
    }),
    index: PropTypes.number,
    onNewComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
};



export default PostContainer;