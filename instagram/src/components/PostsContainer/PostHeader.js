import React from 'react';
import './Post.css';
import styled from 'styled-components';

const PostHeaderDiv = styled.div `
width: 100%;
    display: flex;
    flex-flow: row nowrap;
    padding: 10px 10px;
`

const PostHeaderThumbnail = styled.div `
img{
max-width: 50px;
border-radius: 50px;
align-self: center;
}
`

const PostHeaderUsername = styled.div `
align-self: center;
    margin: 0px 10px;
    font-weight: bold;
`

const PostHeader = props => {
    return (
        <PostHeaderDiv>
        <PostHeaderThumbnail>
        <img src = {props.thumbnailUrl} alt='post header'></img>
        </PostHeaderThumbnail>
        <PostHeaderUsername>
        {props.username}
        </PostHeaderUsername>

        </PostHeaderDiv>
    )
}

export default PostHeader;