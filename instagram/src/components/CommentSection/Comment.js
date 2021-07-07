import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Bold from '../Styles/Bold.js'

const CommentContainer = styled.div`
    margin-bottom: 5px;
`

const CommentUsername = styled(Bold)`
    display: inline;
`

class Comment extends React.Component {
    render() {
        return (
            // commenter username and comment body
            <CommentContainer>
                <CommentUsername>{this.props.comment.username+' '}</CommentUsername> 
                <span>{this.props.comment.text}</span>
            </CommentContainer>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.text
    })
}

export default Comment;