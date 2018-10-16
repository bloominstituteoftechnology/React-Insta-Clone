import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return(
        <div className="comment-container">
           {props.usrData.comments.map((comment, idx) => {
               return(
                   <p className="comment" key={idx}><span className="comment-usr">{comment.username}</span> <span className="comment-text">{comment.text}</span></p>
               )
           })}
        </div>
    );
}

export default CommentSection;


CommentSection.propTypes = {
    usrData: PropTypes.object,
    text: PropTypes.string,
    username:   PropTypes.string
}