import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import './CommentSection.css'
const CommentSection = props =>{
    return(
        <div>
            {props.comments.map((item) =>
                <Comment key = {Math.random()} comment = {item}/>)
                }
            <div className = 'input-section'>
            <input type="text" placeholder="Add a comment..." />
            <strong><p>...</p></strong>
            </div>
        </div>
    )
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;