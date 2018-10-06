import React from 'react';
import CommentSection from './index.js';
import PropTypes from 'prop-types';
import './index.css';

const CommentMap = props => {
    return (
        <div>
            {props.comments.map((comment) => <CommentSection comment={comment} />)}
        </div>
    )
}

CommentMap.proptypes = {
    comment: PropTypes.object.isRequired,
}

export default CommentMap;