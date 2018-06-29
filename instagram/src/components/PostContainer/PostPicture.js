import React from 'react';
import styled from 'styled-components'

const PostPictureContainer = styled.img`
    width:615px;
`;

const PostPicture = props => {
    return (
            <PostPictureContainer alt = "" src = {props.imageUrl} />   
        );
    };


export default PostPicture;

