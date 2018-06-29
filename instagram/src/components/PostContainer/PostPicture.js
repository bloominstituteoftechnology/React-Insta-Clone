import React from 'react';
import styled from 'styled-components'

const PostPictureContainer = styled.img`
    width:613px;
`;

const PostPicture = props => {
    return (
            <PostPictureContainer alt = "" src = {props.imageUrl} />   
        );
    };


export default PostPicture;

