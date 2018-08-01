import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';

const CommentSection = props => {
    return(
        <div>
           {props.comments.map(comment => {
               return (
                    <div className="nameAndComment" key={comment.text}>
                        <span><strong>{comment.username}</strong></span>
                        <span> {comment.text}</span>
                    </div>
               );
           })} 
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;