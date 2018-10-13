import React from 'react';
import styled from 'styled-components';

// Styled components
const PostHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
`;
const PostHeaderImgDiv = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;
const PostHeaderImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 25px;
`;
const PostHeaderName = styled.div`
    font-weight: bold;
`;


// PostHeader contains the user's icon and name

const PostHeader = (props) => {
    // Props taken in:
    // username:
    // thumbnailUrl:

    return (
        <PostHeaderDiv>
            <PostHeaderImgDiv>
                <PostHeaderImg src={props.thumbnailUrl} alt={props.username} />
            </PostHeaderImgDiv>
            <PostHeaderName>{props.username}</PostHeaderName>
        </PostHeaderDiv>
    );
};

export default PostHeader;