import React from 'react';
import styled from "styled-components";
import './PostContainer.css'

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 3%;
`;

const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 2%;
`;

// Header for the Post - shows the username and user thumbnail
function PostHeader(props) {
    return (
        <Header>
            <Thumbnail src={props.thumbImg} alt="user thumbnail" />
            <p>{props.userN}</p>
        </Header>
    )
}

export default PostHeader;