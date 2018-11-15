import React from 'react';
import PropTypes from 'prop-types';
import './PostHeader.css';
import styled from 'styled-components';

const PostHeading = styled.header`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 20px 0;
`;
const ThumbnailURL = styled.img`
    border-radius: 50%;
    width: 40px;
    margin: 0 10px;
`;
const UsernameTitle = styled.h2`
    font-weight: bold;
    font-size: 18px;
`;


const PostHeader = props => {
    return (
        <PostHeading>
            <ThumbnailURL src={props.thumbnailUrl} alt="profile pic"/>
            <UsernameTitle>{props.username}</UsernameTitle>
        </PostHeading>
    )
}

PostHeader.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string
}

export default PostHeader;