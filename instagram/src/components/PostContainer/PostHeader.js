import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostHeaderDiv = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin: 13px 18px;

    p {
        font-weight: bold; 
    }
`

const Avatar= styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 10px;
`

const PostHeader = props => {
    return(
        <PostHeaderDiv>
            <Avatar src={props.thumbnail} alt="User Avatar"/>
            <p>{props.userName}</p>
        </PostHeaderDiv>
    );
}

PostHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
}

export default PostHeader;