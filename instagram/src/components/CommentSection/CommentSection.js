import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './CommentSection.css';

const CommentSection = (props)  =>  {
    return(
        <div>
            <div className="commentSection">
                {props.content.map((comment, index)    =>  {
                    return <Comment key={index} username={comment.username} text={comment.text}/>
                })}
                <div className="timestamp">{props.timestamp}</div>
            </div>
            <div className="addComment">
                <input className="commentInput" placeholder="Add a comment..."></input>
                <i className="fas fa-ellipsis-h fa-lg"></i>
            </div>

        </div>
    )
}

// CommentSection.defaultProps =   {
//     content: props.username,
//     text: props.text,
// }

CommentSection.propTypes = {
    content: PropTypes.array.isRequired,
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;
