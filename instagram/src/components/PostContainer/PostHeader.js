import React from 'react';
import './postContainer.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: center; 
`;

const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 5px;
`;

const Title = styled.div`
    font-weight: bold;
`;


const PostHeader = props => {
    return (
        <Header>
            <Avatar 
            src={props.thumbnailUrl} 
            alt="post header"
            className="post-thumb"
            />
            <Title>{props.username}</Title>
        </Header>
    );
};

export default PostHeader;