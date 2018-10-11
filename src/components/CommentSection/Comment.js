import React from 'react';
import styled from 'styled-components';

const UserComment = styled.div`
    font-family: "proxima-nova",sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding-bottom: 5px;
`;

const Comment = (props) => {
    return (
        <UserComment>
            <strong>{props.user}</strong> {props.text}
        </UserComment>
    )
}

export default Comment;