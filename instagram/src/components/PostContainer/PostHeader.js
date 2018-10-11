import React from 'react';
import './Post.css';
import styled, { css } from 'styled-components';

const PostsHeader = styled.div`
    display: flex;
    `;
const ThumbnailWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin: 5px 10px;
  `;

const UserName = styled.div`
    margin: 20px 10px;
    ${props => props.bold && css`
        font-weight: bold;
        `}
    `;

const PostHeader = (props) => {
    return(
        <PostsHeader>
            <ThumbnailWrapper>
                <img  alt="post thumbnail" className="post-thumbnail" src={props.thumbnailUrl}/>
            </ThumbnailWrapper>
            <UserName bold>{props.username}</UserName>
        </PostsHeader>
    );
    
}

export default PostHeader;