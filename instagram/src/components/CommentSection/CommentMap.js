import React from 'react';
import CommentSection from './index.js';
import PropTypes from 'prop-types';
import './index.css';

const CommentMap = props => {
    return (
        <div>
            {props.comments.map((comment) => <CommentSection comment={comment} />)}
            
            <div className='post-time'>
                <p>{props.userData.timestamp}</p>
            </div>

            <div className='comment-bar'>
                <input type='text' placeholder='Add a comment' />
                <button>&#8230;</button>
            </div>
        </div>
    )
}

CommentMap.proptypes = {
    comment: PropTypes.object.isRequired,
}

export default CommentMap;