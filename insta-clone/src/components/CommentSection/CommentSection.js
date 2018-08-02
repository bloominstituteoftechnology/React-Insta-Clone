import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    .username {
        margin-right: 10px;
        font-weight: bold;
    }
`

const CommentSection = (props) => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => {
                return (
                    <CommentContainer key={comment.text + comment.username} onClick={props.deleteComment} >
                        <p className="username">{comment.username}</p>
                        <p className="text">{comment.text}</p>
                    </CommentContainer>
                )
            })}
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    }))
}

export default CommentSection;