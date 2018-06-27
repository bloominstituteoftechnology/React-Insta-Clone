import React from 'react';
import styled from 'styled-components';

const PostHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 1.5%;
`;


const Thumbnail = styled.img`
    height: 40px;
    border-radius: 50%;
`;

const Username = styled.h2`
    font-weight: bold;
    margin-left: 1%;
`;

const PostHeader = (props) => {
    return (
        <PostHeaderContainer>
            <Thumbnail src={props.thumbnailUrl} alt='thumbnail' />
            <Username>{props.username}</Username>
        </PostHeaderContainer>
    );
}

export default PostHeader;