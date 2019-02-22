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

const PostThumbnail = styled.img`
    height: 100%;
    border-radius: 50%;
`;

const PostUsername = styled.div`
    font-weight: bold;
    margin-left: 10px;
`;

const ActualUsername = styled.p`
    
`;

const PostHeader = props => {
    return (
        <PostHeaderStyleWrapper>
            <PostThumbWrapper>
                <PostThumbnail 
                src={props.thumbnailUrl} 
                alt="user-thumbnail"
                />
            </PostThumbWrapper>
            <PostUsername>
                <ActualUsername>{props.username}</ActualUsername>
            </PostUsername>
        </PostHeaderStyleWrapper>
    );
}

export default PostHeader;