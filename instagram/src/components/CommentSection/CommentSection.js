import React, { Component } from 'react';
import PropTypes from 'prop-types';

function CommentSection(props) {
    return (
        <div className="comment">
            <div className="bold">
                {props.dummyData.username}
            </div>
            <div className="text-content">
                {props.dummyData.text}
            </div>
        </div>
    )
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};


export default CommentSection;