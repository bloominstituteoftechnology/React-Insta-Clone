import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostHeaderDiv = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
`;

const Image = styled.img`
    width: 30px;
    height: auto;
    border-radius: 50%;
    margin: 0 10px 0 15px;
`;

const PostHeaderH1 = styled.h1`
    font-size: 1.8rem;
`;

const PostHeader = props => {
    return (
        <PostHeaderDiv>
            <Image src={props.thumbnail} alt="thumbnail"/>
            <PostHeaderH1>{props.username}</PostHeaderH1>
        </PostHeaderDiv>
    );
}

PostHeader.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string
}

export default PostHeader;