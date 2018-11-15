import React from 'react';
import PostBody from './PostBody';
import PostUserInfo from './PostUserInfo';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    background-color: white;
    margin-left: -1px;
    margin-right: -1px;
    .post--body {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        img {
            width: 100%;
        }
    }
`;

const PostContainer = (props) => {
    return (
        <Div>
            <PostUserInfo username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            <PostBody post={props.post} likes={props.likes} index={props.index} />
        </Div>
    );
};

PostContainer.propTypes = {
    post : PropTypes.shape({
        username     : PropTypes.string,
        thumbnailUrl : PropTypes.string,
        imageUrl     : PropTypes.imageUrl,
        likes        : PropTypes.number,
        timestamp    : PropTypes.string,
        comments     : PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    })
};

export default PostContainer;
