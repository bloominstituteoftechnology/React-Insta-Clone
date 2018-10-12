import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../node_modules/styled-components';

const CommentP = styled.p`
    margin: 5px 1.5%
`
const Comment = props => <CommentP><strong>{props.username}</strong> {props.text}</CommentP>

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Comment.defaultProps = {
    username: localStorage.getItem('username')
}

export default Comment