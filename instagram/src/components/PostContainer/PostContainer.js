import React from 'react';
import './PostContainer.css';
import Posts from './Posts'
import styled from 'styled-components';

const ContainerWrapper = styled.div`

`;
const PostContainer = props => {
    return(
        <ContainerWrapper>
            {props.post.map(p => <Posts key={p.imageUrl} post={p} /> )}
        </ContainerWrapper>
    )
}

export default PostContainer;