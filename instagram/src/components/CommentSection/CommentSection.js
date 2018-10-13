import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

import CommentForm from '../CommentSection/CommentForm';


const StyledComments = styled.div`
    margin: 10px 15px;
`

const StyledComment = styled.div`
    font-size: 1.5rem;
    margin-bottom: 10px;
`

const StyledCommentText = styled.p`
    line-height: 2rem;
`

const StyledCommentUsername = styled.span`
    font-weight: bold;
    letter-spacing: 0.02rem;
`

const StyledPostTimestamp = styled.div`
    margin: 0 15px;
    font-size: 1rem;
    font-weight: bold;
    color: #999999;
`

const StyledPostCommentForm = styled.div`
    margin: 10px 15px;
    border-top: 1px solid #eeeeee;
`


class CommentSection extends React.Component {

    state = {
        postKey: this.props.postKey,
        timestamp: this.props.timestamp,
        comments: this.props.comments,
    }

    render() {
        return (
            <>
                <StyledComments>
                    {this.state.comments.map(comment => (
                        <StyledComment>
                            <StyledCommentText>
                                <StyledCommentUsername>{comment.username}</StyledCommentUsername> 
                                {comment.text}
                            </StyledCommentText>
                        </StyledComment>
                    ))}
                </StyledComments>
                <StyledPostTimestamp>
                    {this.state.timestamp}
                </StyledPostTimestamp>
                <StyledPostCommentForm>
                    <CommentForm postKey={this.state.postKey} addNewComment={this.props.addNewComment} />
                </StyledPostCommentForm>
            </>
        )
    }
}

CommentSection.propTypes = {
    postKey: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    addNewComment: PropTypes.func,
    comments: PropTypes.array,
};

CommentSection.defaultProps = {
    postKey: 0,
    timestamp: Date.now(),
}

export default CommentSection;