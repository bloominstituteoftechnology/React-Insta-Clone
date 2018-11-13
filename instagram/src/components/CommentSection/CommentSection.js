import React from "react";
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return(
        <div className="comment-container">
            <p><span>{props.data.username}</span> {props.data.text}</p>
        </div>
    );
};

CommentSection.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};


export default CommentSection;