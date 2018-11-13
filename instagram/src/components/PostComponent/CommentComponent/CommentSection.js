import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Styled from 'styled-components'

const UserName = Styled.p`
    margin-right: 10px;
    font-weight: bold;
`

const CommentSection = (props) => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => {
                return (
                    <div className="comment" key={comment.text + comment.username}>
                        <UserName>{comment.username}</UserName>
                        <p className="text">{comment.text}</p>
                    </div>
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