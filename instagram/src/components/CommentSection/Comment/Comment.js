import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 5px;
`;
const UserNameStyle = styled.span`
    font-weight: bold;
`;

const Comment = props => {
    return (
        <Wrapper>
            <UserNameStyle>{props.comment.username}</UserNameStyle> {props.comment.text}
        </Wrapper>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;