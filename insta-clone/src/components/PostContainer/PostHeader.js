import React from 'react';
import styled from 'styled-components';

const PostHeaderStyleWrapper = styled.div`
    display: flex;
    margin: 10px;
`;

const PostThumbWrapper = styled.div`
    height: 50px;
    width: 50px;
`;

const PostThumb = styled.img`
    height: 100%;
    border-radius: 50%;
`;

const UserName = styled.div`
    font-weight: bold;
    margin-left: 10px;
`;

const PostHeader = props => {
    return (
        <PostHeaderStyleWrapper>
            <PostThumbWrapper>
                <PostThumb src={props.thumbnailUrl} alt="post header" />
            </PostThumbWrapper>
            <UserName>
                <p>{props.username}</p>
            </UserName>
        </PostHeaderStyleWrapper>
    );
};

export default PostHeader;