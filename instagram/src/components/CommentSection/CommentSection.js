import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

class CommentSection extends React.Component {

    render() {

        return (
            <CommentContainer>
                <CommentUser>{this.props.username}</CommentUser>
                <CommentText>{this.props.text}</CommentText>
            </CommentContainer>
        )

    }
};

const CommentContainer = styled.div`
    font-size: 16px;
    margin: 5px 0;
`

const CommentText = styled.span`
    display: inline;
`
const CommentUser = styled.span`
    display: inline;
    font-weight: bold;
    margin-right: 5px;
`

export default CommentSection;