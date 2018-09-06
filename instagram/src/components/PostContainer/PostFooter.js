import React from 'react';
import styled from "styled-components";
import PostFooterActions from './PostFooterActions';
import './PostContainer.css'

const Footer = styled.footer`
    display: flex;
    justify-content: flex-start;
    padding: 1%;
    margin-left: 3%;
`;

// Footer of the post - shows the likes
function PostFooter(props) {
    return (
        <Footer>
            <PostFooterActions likes={props.likes} />
        </Footer>
    )
}

export default PostFooter;