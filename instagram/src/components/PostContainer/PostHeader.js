import React from 'react';
import styled from 'styled-components';

const PostHead = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const Thumbnail = styled.img`
    display: inline-block;
    height: 30px;
    width: auto;
    border-radius: 50px;
    margin: 10px 0 0 15px;
`;

const Username = styled.h2`
    display: inline-block;
    font-size: 15px;
    margin-top: 19px;
    margin-left: 9px;
`;

let PostHeader = props => {
    return (
        <PostHead>
            <Thumbnail alt={props.post.username} src={props.post.thumbnailUrl} />
            <Username>{props.post.username}</Username>
        </PostHead>
    )
}

export default PostHeader;