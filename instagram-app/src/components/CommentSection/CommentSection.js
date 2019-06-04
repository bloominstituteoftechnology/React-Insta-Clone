import React from 'react';
import pt from 'prop-types';
import './CommentSection.css';

const CommentSection = ({ props }) => {
    return (
        <div className="comment__container">
        <p><span className="user__comment">{props.username}</span>&nbsp;&nbsp;{props.text}</p>
        </div>
    )
}

export default CommentSection;
CommentSection.propTypes = {
    props: pt.shape({
        id: pt.string.isRequired,
        username: pt.string.isRequired,
        text: pt.string.isRequired
    })
}
